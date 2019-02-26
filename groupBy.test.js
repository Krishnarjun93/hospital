function groupBy() {
  
}

describe('groupBy', () => {
  it('works with property name', () => {
    const people = [
      { firstName: 'Joe', lastName: 'Smith' },
      { firstName: 'Kira', lastName: 'Johnson' },
      { firstName: 'Dequan', lastName: 'Smith' }
    ]

    expect(groupBy(people, 'lastName')).toEqual({
      'Smith': [{ firstName: 'Joe', lastName: 'Smith' }, { firstName: 'Dequan', lastName: 'Smith' }],
      'Johnson': [{ firstName: 'Kira', lastName: 'Johnson' }]
    })
  })

  describe('extra challenge', () => {
    it('works with function', () => {
      const people = [
        { firstName: 'Jimmy', lastName: 'Smith' },
        { firstName: 'Jimmy', lastName: 'Johnson' },
        { firstName: 'Sierra', lastName: 'Tate' }
      ]
      
      expect(groupBy(people, x => x.firstName)).toEqual({
        'Jimmy': [{ firstName: 'Jimmy', lastName: 'Smith' }, { firstName: 'Jimmy', lastName: 'Johnson' }],
        'Sierra': [{ firstName: 'Sierra', lastName: 'Tate' }]
      })
    })
  })
})
