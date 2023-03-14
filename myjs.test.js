const Ship = require('./ship');
const Gameboard = require('./gameboard');
const Player = require('./player');


const position = Gameboard('cruiser', 4, 10,10)


  it('position x', () => {



    expect(position.ship.x).toBe(10);

  });
  it('gameboard name', () => {



    expect(position.ship.name).toBe('cruiser');

  });

  it('gameboard length', () => {



    expect(position.ship.length).toBe(4);

  });

  const position2 = Gameboard('boat', 2, 20,20)


  it('touched', () => {

    expect(position.receiveAttack(10,10)).toBe(true);



  });


  it('touched2', () => {



    expect(position2.receiveAttack(20,20)).toBe(true);

  }); 

  it('missed', () => {



    expect(position.receiveAttack(14,10)).toStrictEqual([{"x": 14, "y": 10}]
    );

  }); 

  it('missed pos 2', () => {



    expect(position2.receiveAttack(100,100)).toStrictEqual([{"x": 100, "y": 100}]
    );

  }); 
  


  it('touched x+3', () => {



    expect(position.receiveAttack(12,10)).toBe(true);


  }); 


   it('new health', () => {



    expect(position.ship.damage(1)).toBe(1);


  }); 




  it('sunk', () => {



    expect(position.ship.isSunk()).toBe(false);


  }); 

  it('missed list', () => {



    expect(position.receiveAttack(22,10)).toStrictEqual([{"x": 14, "y": 10}, {"x": 22, "y": 10}]
    );


  }); 

  it('test', () => {



    expect(position2.ship.isSunk()).toBe(false);


  }); 

const bobo = Player('Boris')



it('test', () => {



  expect(bobo.name).toBe('Boris');


}); 