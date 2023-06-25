/*
 a slug is a string used to identify a certain item. Oftentimes, this slug is used in the URL for Search Engine Optimization and better user experience. Let's say you've got a product called: "Easy assembly dining table". We cannot use this name in the URL bar because it contains spaces (it won't look nice, for example https://example.com/item/Easy assembly dining table). This is why we use a slug that looks like this:
easy-assembly-dining-table so the URL becomes: https://example.com/item/easy-assembly-dining-table.

Complete the function getSlug() such that it returns the slug based on the text it receives, following the rules below:
The slug should not be more than 15 characters. When there are more than 15 characters, ignore everything after the 15th character.
The slug should always be in lower case.
Space characters should be replaced by dashes (-).
 */
let str = `How To Become A Billionaire with 2k`;
const getSlug = (someString) => {
  return `https://www.example.com/blog/`+someString.replaceAll(" ","-");
}
console.log(getSlug(str));
