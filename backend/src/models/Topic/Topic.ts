import { Field, ID, ObjectType } from "type-graphql";
import { TopicName } from "../index";

@ObjectType()
class Topic {
  @Field(() => ID)
  id: string;

  @Field(() => TopicName)
  name: TopicName;

  @Field()
  createdAt: Date;
}

export { Topic };
