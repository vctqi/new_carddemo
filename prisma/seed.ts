import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Clean up existing data
  await prisma.transaction.deleteMany()
  await prisma.card.deleteMany()
  await prisma.account.deleteMany()
  await prisma.user.deleteMany()

  // Create users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'adminpass', // In production, use hashed passwords
      role: 'admin',
    },
  })

  const regularUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password', // In production, use hashed passwords
      role: 'user',
    },
  })

  console.log('Created users:', { adminUser, regularUser })

  // Create accounts
  const account1 = await prisma.account.create({
    data: {
      userId: regularUser.id,
      accountId: '10001234567',
      currentBalance: 1250.75,
      creditLimit: 5000,
      cashCreditLimit: 1000,
      active: true,
    },
  })

  const account2 = await prisma.account.create({
    data: {
      userId: regularUser.id,
      accountId: '10009876543',
      currentBalance: 450.25,
      creditLimit: 2500,
      cashCreditLimit: 500,
      active: true,
    },
  })

  console.log('Created accounts:', { account1, account2 })

  // Create cards
  const card1 = await prisma.card.create({
    data: {
      accountId: account1.id,
      cardNumber: '4111111111111111',
      cvv: '123',
      embossedName: 'JOHN DOE',
      expirationDate: new Date('2025-12-31'),
      active: true,
    },
  })

  const card2 = await prisma.card.create({
    data: {
      accountId: account1.id,
      cardNumber: '5555555555554444',
      cvv: '456',
      embossedName: 'JOHN DOE',
      expirationDate: new Date('2026-03-31'),
      active: true,
    },
  })

  const card3 = await prisma.card.create({
    data: {
      accountId: account2.id,
      cardNumber: '378282246310005',
      cvv: '789',
      embossedName: 'JOHN DOE',
      expirationDate: new Date('2024-09-30'),
      active: false,
    },
  })

  console.log('Created cards:', { card1, card2, card3 })

  // Create transactions
  const transaction1 = await prisma.transaction.create({
    data: {
      cardId: card1.id,
      accountId: account1.id,
      transactionId: 'TRX123456789',
      type: 'purchase',
      category: 'Groceries',
      source: 'POS',
      description: 'Grocery Store',
      amount: 78.95,
      merchantName: 'Whole Foods',
      merchantCity: 'New York',
      merchantZip: '10001',
      originDate: new Date('2025-05-21'),
      processDate: new Date('2025-05-21'),
    },
  })

  const transaction2 = await prisma.transaction.create({
    data: {
      cardId: card1.id,
      accountId: account1.id,
      transactionId: 'TRX123456790',
      type: 'payment',
      category: 'Payment',
      source: 'WEB',
      description: 'Monthly Payment',
      amount: 500.00,
      originDate: new Date('2025-05-20'),
      processDate: new Date('2025-05-20'),
    },
  })

  const transaction3 = await prisma.transaction.create({
    data: {
      cardId: card2.id,
      accountId: account1.id,
      transactionId: 'TRX123456791',
      type: 'purchase',
      category: 'Dining',
      source: 'POS',
      description: 'Restaurant',
      amount: 125.40,
      merchantName: 'Fancy Restaurant',
      merchantCity: 'New York',
      merchantZip: '10002',
      originDate: new Date('2025-05-19'),
      processDate: new Date('2025-05-19'),
    },
  })

  const transaction4 = await prisma.transaction.create({
    data: {
      cardId: card1.id,
      accountId: account1.id,
      transactionId: 'TRX123456792',
      type: 'purchase',
      category: 'Transportation',
      source: 'POS',
      description: 'Gas Station',
      amount: 45.80,
      merchantName: 'Exxon',
      merchantCity: 'Newark',
      merchantZip: '07102',
      originDate: new Date('2025-05-18'),
      processDate: new Date('2025-05-18'),
    },
  })

  const transaction5 = await prisma.transaction.create({
    data: {
      cardId: card2.id,
      accountId: account1.id,
      transactionId: 'TRX123456793',
      type: 'purchase',
      category: 'Shopping',
      source: 'ONLINE',
      description: 'Online Shopping',
      amount: 127.99,
      merchantName: 'Amazon',
      merchantCity: 'Online',
      merchantZip: '98101',
      originDate: new Date('2025-05-17'),
      processDate: new Date('2025-05-17'),
    },
  })

  console.log('Created transactions:', { transaction1, transaction2, transaction3, transaction4, transaction5 })

  console.log('Seed completed successfully')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })