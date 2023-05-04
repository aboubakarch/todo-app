import React, { Component } from 'react';
import Header from '../components/common/Header';

class Counter extends Component {
  state = {
    counters: [],
  };

  handleIncreas = (id) => {
    let counters = [...this.state.counters];
    counters = counters.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    this.setState({ counters });
  };

  handleDecreas = (id) => {
    let counters = [...this.state.counters];
    counters = counters.map((item) =>
      item.id === id
        ? { ...item, count: item.count !== 0 ? item.count - 1 : 0 }
        : item
    );
    this.setState({ counters });
  };

  handleAddCounter = () => {
    this.setState((prev) => ({
      counters: [...prev.counters, { count: 0, id: prev.counters.length + 1 }],
    }));
  };

  handleRemove = (id) => {
    console.log(this.state.counters);
    this.setState((prev) => ({
      counters: prev.counters.filter((item) => item.id !== id),
    }));
  };

  componentDidUpdate(preProps, prevSttate) {
    console.log('PREV', prevSttate);
    console.log('CURRENT', this.state);
  }

  render() {
    const { counters } = this.state;
    return (
      <>
        <Header />
        <div className="flex justify-between px-[20%] mt-[50px]">
          <h6 className="text-[20px]">{`Counters: ${counters.length}`}</h6>
          <button
            className="bg-success px-[20px] py-[10px] rounded-3xl text-white"
            onClick={this.handleAddCounter}
          >
            + Add Counter
          </button>
        </div>
        <div className="flex flex-col items-center mt-[30px]">
          {counters.map((item) => (
            <div
              className=" mb-[10px] flex justify-center border-[1px] border-[#cacaca] w-[50%] h-[80px] rounded items-center"
              key={item.id}
            >
              <button
                className="w-[40px] h-[40px] bg-primary text-white font-bold rounded"
                onClick={() => this.handleIncreas(item.id)}
              >
                +
              </button>
              <p className="border-[1px] w-[60px] h-[40px] rounded my-0 mx-[10px] justify-center flex items-center">
                {item.count}
              </p>
              <button
                className="w-[40px] h-[40px] bg-primary text-white font-bold rounded"
                onClick={() => this.handleDecreas(item.id)}
              >
                -
              </button>
              <button
                className="ml-[20px] bg-danger px-[20px] py-[10px] rounded-3xl text-white"
                onClick={() => this.handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Counter;
