var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}