import * as lit from 'https://unpkg.com/lit?module';
import {repeat} from 'https://unpkg.com/lit/directives/repeat?module';
import {classMap} from 'https://unpkg.com/lit/directives/class-map?module';

const dll = { directives: {}};
//===BEGIN===
dll.lit = lit;
dll.directives.repeat = repeat;
dll.directives.classMap = classMap;
//===END===
export {dll};