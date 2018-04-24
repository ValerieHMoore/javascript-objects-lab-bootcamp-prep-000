var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
const recipes = {dessert: cake}
return Object.assign({}, recipes, {[dessert]: cake})
}