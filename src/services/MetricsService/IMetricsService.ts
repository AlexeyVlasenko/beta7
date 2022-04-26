export default interface IMetricsService {
  nodeID: string;
  kafkaBrokers: string[];
  schemaRegistry: string;
  restoreTopic: string;
}
