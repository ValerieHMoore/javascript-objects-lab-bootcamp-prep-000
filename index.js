var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
recipes.dessert = 'cake';
return Object.assign({}, recipes, {[dessert]: cake})
}