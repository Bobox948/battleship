const Ship = require('./ship');
const Gameboard = require('./gameboard');


const ship1 = Ship('cruiser', 4);


test('length', () => {

    expect(ship1.length).toBe(4);
    
  });

  test('health', () => {

    expect(ship1.health).toBe(4);
    
  });


  test('hit', () => {


    expect(ship1.damage(1)).toBe(3);
    
  });


 
  test('hit2', () => {
    


    expect(ship1.damage(1)).toBe(2);
    
  });
  it('sink', () => {



    expect(ship1.isSunk()).toBe(false);

  });


  it('position', () => {



    expect(Gameboard(0,0)).toBe(0);

  });
