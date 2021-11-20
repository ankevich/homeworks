class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    this.time = time;

    if (typeof id === "undefined") {
      throw new Error("Параметр id не передан");
    }

    const compareIndex = (call) => (call.id === id ? true : false);

    if (this.alarmCollection.findIndex(compareIndex) > -1) {
      console.error("Будильник с таким id уже существует");
    } else {
      this.alarmCollection.push({ time, callback, id });
    }
  }

  // call = { time, callback, id }
  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((call) =>
      call.id === id ? false : true
    );
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    let checkClock = (call) => {
      if (this.getCurrentFormattedTime() === call.time) {
        call.callback();
      }
    };

    this.timerId = setInterval(() => {
      this.alarmCollection.map(checkClock);
    }, 1000);
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((call) => {
      console.log(call.id, call.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = []
  }
}
