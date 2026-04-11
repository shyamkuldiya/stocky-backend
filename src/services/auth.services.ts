import prisma from '../lib/prisma'
import bcrypt from 'bcrypt'
import { TLogin, TRegister } from '../validations/auth.schema'

async function registerUser(data: TRegister) {
  console.log({ data })
  try {
    const { name, email, password, role } = data

    const isUserExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (isUserExists) {
      throw new Error(`User with ${email} already exists`)
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        refreshToken: '',
      },
    })

    return user
  } catch (error) {
    throw error
  }
}
async function loginUser(data: TLogin) {
  try {
    const { email, password } = data

    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!isUserExists) {
      throw new Error('User does not exists')
    }

    const isPasswordValid = bcrypt.compareSync(password, isUserExists.password)

    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    const { password: _, ...userWithoutPassword } = isUserExists
    return {
      data: userWithoutPassword,
    }
  } catch (error) {
    throw error
  }
}

export { registerUser, loginUser }
