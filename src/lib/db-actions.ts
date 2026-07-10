"use server";

import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src/lib/db.json');

// Helper to read DB
export async function getDb() {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading db:", error);
    return { products: [], categories: [], orders: [], settings: {} };
  }
}

// Helper to write DB
export async function saveDb(data: any) {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf-8');
    return { success: true };
  } catch (error) {
    console.error("Error writing db:", error);
    return { success: false, error: "Failed to save database" };
  }
}

// Product Actions
export async function getProducts() {
  const db = await getDb();
  return db.products;
}

export async function addProduct(product: any) {
  const db = await getDb();
  const newProduct = { ...product, id: `p${Date.now()}` };
  db.products.push(newProduct);
  await saveDb(db);
  return { success: true, product: newProduct };
}

export async function updateProduct(id: string, updates: any) {
  const db = await getDb();
  const index = db.products.findIndex((p: any) => p.id === id);
  if (index !== -1) {
    db.products[index] = { ...db.products[index], ...updates };
    await saveDb(db);
    return { success: true };
  }
  return { success: false, error: "Not found" };
}

export async function deleteProduct(id: string) {
  const db = await getDb();
  db.products = db.products.filter((p: any) => p.id !== id);
  await saveDb(db);
  return { success: true };
}

// Orders Actions
export async function getOrders() {
  const db = await getDb();
  return db.orders;
}

export async function updateOrderStatus(id: string, status: string) {
  const db = await getDb();
  const index = db.orders.findIndex((o: any) => o.id === id);
  if (index !== -1) {
    db.orders[index].status = status;
    await saveDb(db);
    return { success: true };
  }
  return { success: false, error: "Not found" };
}

// Dashboard Stats
export async function getDashboardStats() {
  const db = await getDb();
  const totalRevenue = db.orders.reduce((sum: number, o: any) => sum + (o.total || 0), 0);
  const totalOrders = db.orders.length;
  const totalProducts = db.products.length;
  
  return {
    totalRevenue,
    totalOrders,
    totalProducts,
    recentOrders: db.orders.slice(-5)
  };
}
