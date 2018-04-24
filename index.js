var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
var extra = {dessert:"cake"}
Object.assign({}, recipes, extra)
return recipes
}