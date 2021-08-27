//* node-graphql/src/schema.js

const { gql } = require('apollo-server')

const typeDefs = gql`

  type Students {
    id: ID!
    email: String!
    fullName: String!
    dept: String
    enrolled: Boolean
  }

  type Query {
    enrollment: [Students!]
    students: [Students!]!
    students(id: ID!): Students
  }

  type Mutation {
    registerStudents(email: String!, fullName: String!, dept: String): Students!
    enroll(id: ID!): Students
  }
`
module.exports = {
  typeDefs,
}