const countries = {
    ukraine: 'borsch',
    italy: 'pizza',
    georgia: 'hinkali'
}
const pretty = JSON.stringify(countries)

const parsed = JSON.parse(pretty)

console.log(pretty)