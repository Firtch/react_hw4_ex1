import logo from "./logo.svg";
import "./styles.css";
import React from "react";

function Car(props) {
  const classes = ["card"];

  if (props.car.marked) {
    classes.push("marked");
  } else {
    classes.length = 1;
  }

  return (
    <div className={classes.join(" ")} onClick={props.onMark}>
      <div className="card-img">
        <img src={props.car.img} alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price} руб.</p>
    </div>
  );
}

class App extends React.Component {
  state = {
    cars: [
      {
        marked: false,
        name: "Ford F-150 Raptor SuperCrew XIII Рестайлинг Raptor",
        price: 6800000,
        img: "https://avatars.mds.yandex.net/get-autoru-vos/3570143/673c1a2416806cd202453df1002a0979/1200x900n",
      },
      {
        marked: false,
        name: "Dodge RAM 1500 TRX",
        price: 13745250,
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-ram-1500-trx-111-1597623066.jpg?crop=0.811xw:0.608xh;0,0.337xh&resize=1200:*",
      },
      {
        marked: false,
        name: "Dodge Challenger III Рестайлинг 2",
        price: 3190000,
        img: "https://avatars.mds.yandex.net/get-autoru-vos/4721967/f56197c6ada63c1769f984b1ac6aee2c/1200x900n",
      },
      {
        marked: false,
        name: "Ford Mustang VI Рестайлинг",
        price: 3150000,
        img: "https://avatars.mds.yandex.net/get-autoru-vos/4459107/3a417de7dddb367cf5e47838e7804954/1200x900n",
      },
    ],
  };

  handleMarked(name) {
    const cars = this.state.cars.concat();
    const car = cars.find((c) => c.name === name);
    car.marked = !car.marked;

    this.setState({ cars });
  }

  renderCars() {
    return this.state.cars.map((car) => {
      return (
        <Car
          car={car}
          key={car.name + Math.random()}
          onMark={this.handleMarked.bind(this, car.name)}
        />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list">{this.renderCars()}</div>
      </div>
    );
  }
}

export default App;
