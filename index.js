var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, recipes, {[dessert]: 'cake'})
const extra = {dessert: 'cake'}
  updateObjectWithKeyAndValue(recipes, extra)
}