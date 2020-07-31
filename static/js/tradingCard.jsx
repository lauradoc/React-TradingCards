"use strict";


const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

function printTradingCardData(tradingCardData) {
  for (const card of tradingCardData) {
    console.log(card.name);
    console.log(card.skill);
  }
}

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <h2>Skill: {props.skill} </h2>
      <img src={props.imgUrl} />
    </div>
  );
}

function TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
    <TradingCard
      name={currentCard.name}
      skill={currentCard.skill}
      imageUrl={currentCard.imageUrl}
      />
    );
  }

  return (
    <div>
      {tradingCards}
    </div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.querySelector("#allcards")
  );