import YAML from 'yaml';
import appRoot from 'app-root-path';
import fs from 'fs';
import _get from 'lodash.get';

const configYAML = fs.readFileSync(appRoot + '/shared/config.yml', {
  encoding: 'utf8',
});

let config = {
  ...YAML.parse(configYAML),
};

const env = (name: string, def?: any) => {
  return _get(config, name, def);
};

export default env;
