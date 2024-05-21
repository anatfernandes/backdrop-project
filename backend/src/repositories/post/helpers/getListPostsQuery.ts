import { fql } from "fauna";
import { ListsPostsParamsType } from "../types";

function listPostsByDateAsc(data: ListsPostsParamsType) {
  return fql`Posts.where(post => 
      post.active == true
      && post.locale.toLowerCase().includes(${data.where.locale.toLowerCase()})
      && (${data.where.users}.length == 0 || ${data.where.users}.includes(post.owner.id))
      && (${data.where.topics}.length == 0
        || post.topics.firstWhere(topic => ${data.where.topics}.includes(topic.id)) != null)
    )
    .order(asc(.createdAt))
    .toArray()
    .slice(${data.offset})
    .toSet()
    .pageSize(${data.limit});`;
}

function listPostsByDateDesc(data: ListsPostsParamsType) {
  return fql`Posts.where(post => 
      post.active == true
      && post.locale.toLowerCase().includes(${data.where.locale.toLowerCase()})
      && (${data.where.users}.length == 0 || ${data.where.users}.includes(post.owner.id))
      && (${data.where.topics}.length == 0
        || post.topics.firstWhere(topic => ${data.where.topics}.includes(topic.id)) != null)
    )
    .order(desc(.createdAt))
    .toArray()
    .slice(${data.offset})
    .toSet()
    .pageSize(${data.limit});`;
}

function listPostsByLikeAsc(data: ListsPostsParamsType) {
  return fql`Posts.where(post => 
      post.active == true
      && post.locale.toLowerCase().includes(${data.where.locale.toLowerCase()})
      && (${data.where.users}.length == 0 || ${data.where.users}.includes(post.owner.id))
      && (${data.where.topics}.length == 0
        || post.topics.firstWhere(topic => ${data.where.topics}.includes(topic.id)) != null)
    )
    .order(asc(post => Reactions.where(.post.id == post.id).count()))
    .toArray()
    .slice(${data.offset})
    .toSet()
    .pageSize(${data.limit});`;
}

function listPostsByLikeDesc(data: ListsPostsParamsType) {
  return fql`Posts.where(post => 
      post.active == true
      && post.locale.toLowerCase().includes(${data.where.locale.toLowerCase()})
      && (${data.where.users}.length == 0 || ${data.where.users}.includes(post.owner.id))
      && (${data.where.topics}.length == 0
        || post.topics.firstWhere(topic => ${data.where.topics}.includes(topic.id)) != null)
    )
    .order(desc(post => Reactions.where(.post.id == post.id).count()))
    .toArray()
    .slice(${data.offset})
    .toSet()
    .pageSize(${data.limit});`;
}

function getListPostsQuery(data: ListsPostsParamsType) {
  const query = {
    date: {
      asc: listPostsByDateAsc,
      desc: listPostsByDateDesc,
    },
    like: {
      asc: listPostsByLikeAsc,
      desc: listPostsByLikeDesc,
    },
  }[data.sort.by][data.sort.direction];

  return query(data);
}

export { getListPostsQuery };
