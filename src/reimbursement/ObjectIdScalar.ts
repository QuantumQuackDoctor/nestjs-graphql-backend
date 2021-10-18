import { CustomScalar, Scalar } from '@nestjs/graphql';
import { ASTNode, Kind } from 'graphql';
import { ObjectID } from 'typeorm';

@Scalar('MongoObjectId', () => ObjectID)
export class MongoObjectId implements CustomScalar<string, ObjectID> {
  description?: string;
  parseValue(value: string): ObjectID {
    return new ObjectID(value);
  }
  serialize(value: ObjectID): string {
    return value.toHexString();
  }
  parseLiteral(ast: ASTNode): ObjectID {
    if (ast.kind === Kind.STRING) {
      return new ObjectID(ast.value);
    }
    return null;
  }
}
