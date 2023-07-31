//Complete the function mergeOptions such that it returns an object which merges the options with the defaultOptions. If a key is defined in the options, it should override the option provided in the defaultOptions.
const options = {
    tabSize: 4,
};
const defaultOptions = {
    indentation: 'tab',
    tabSize: 2,
    language: 'javascript',
};

const mergeOptions = (options,defaultOptions) => {
  return {...defaultOptions,...options};
}
console.log(mergeOptions(options,defaultOptions));
