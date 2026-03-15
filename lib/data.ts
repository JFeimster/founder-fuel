import site from "@/data/site.json";
import fundingOptions from "@/data/funding-options.json";
import posts from "@/data/posts.json";
import issues from "@/data/issues.json";
import faqs from "@/data/faqs.json";

export type SiteData = typeof site;
export type FundingOption = (typeof fundingOptions)[number];
export type Post = (typeof posts)[number];
export type Issue = (typeof issues)[number];
export type FAQ = (typeof faqs)[number];

export function getSiteData() {
  return site;
}

export function getFundingOptions() {
  return fundingOptions;
}

export function getFundingOptionBySlug(slug: string) {
  return fundingOptions.find((item) => item.slug === slug);
}

export function getPosts() {
  return posts;
}

export function getFeaturedPosts() {
  return posts.filter((post) => post.featured);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByTag(tag: string) {
  return posts.filter((post) => post.tags.includes(tag));
}

export function getIssueBySlug(slug: string) {
  return issues.find((issue) => issue.slug === slug);
}

export function getIssues() {
  return issues;
}

export function getFAQs() {
  return faqs;
}