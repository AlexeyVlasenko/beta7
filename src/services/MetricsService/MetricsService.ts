// @ts-ignore
import tx2 from 'tx2';

class MetricsService {
  readonly produce: any;
  readonly consume: any;

  constructor() {
    this.produce = tx2.meter({
      name: 'produce/sec',
      samples: 1,
      timeframe: 60,
    });

    this.consume = tx2.meter({
      name: 'consume/sec',
      samples: 1,
      timeframe: 60,
    });
  }
}

export default MetricsService;
