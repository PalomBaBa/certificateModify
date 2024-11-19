const whiteList = [''];

let data = [];
let advanced = {};
const components =
  import.meta.glob('./*.js', {
    eager: true
  });

for (const [key, value] of Object.entries(components)) {
  let componentName = key.replace('./', '');
  componentName = componentName.split('.')[0];
  whiteList.forEach(its => {
    if (its !== componentName) {
      advanced[componentName] = value[componentName];
      data.push(value[componentName]);
    }
  });
}

export {
  advanced
};
export default data;
