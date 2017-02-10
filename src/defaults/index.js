import development from './development';
import production from './production';

export default {
  development,
  production
}[process.env.NODE_ENV || 'development'];
