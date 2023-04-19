const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createTodo = async (packet) => {
  const todo = await prisma.Todo.create({
    data: {
      text: packet.text,
    },
  });

  if (todo) {
    return todo;
  }
};

exports.getTodos = async () => {
  const todos = await prisma.Todo.findMany();

  if (todos) {
    return todos;
  }
};

exports.updateTodo = async (id, packet) => {
  try {
    const todo = await prisma.Todo.update({
      where: {
        id,
      },
      data: {
        text: packet.text,
        isCompleted: packet.isCompleted,
      },
    });

    return todo;
  } catch (error) {
    if (error?.meta?.cause) {
      let err = new Error();
      err = { errorType: 'DB_ERROR', errorMessage: error.meta.cause, statusCode: 400 };
      throw err;
    }
    throw error;
  }
};

exports.deleteTodo = async (id) => {
  try {
    const todo = await prisma.Todo.delete({
      where: {
        id,
      },
    });

    return todo;
  } catch (error) {
    if (error?.meta?.cause) {
      let err = new Error();
      err = { errorType: 'DB_ERROR', errorMessage: error.meta.cause, statusCode: 400 };
      throw err;
    }
    throw error;
  }
};
