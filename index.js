var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
var extra = {dessert:"cake"}
return Object.assign({}, recipes, {[dessert]: cake})
}