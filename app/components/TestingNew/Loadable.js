/**
 *
 * Asynchronously loads the component for TestingNew
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
