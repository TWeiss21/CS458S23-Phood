//Test to make sure the new json with pantry data inside exists
const fs = require('fs')

it('A new json was created with all pantry data inside of it, testing to make sure that file exists', () => {
    expect(fs.existsSync('pantryData.json')).toBe(true)
})