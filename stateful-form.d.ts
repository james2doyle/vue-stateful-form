import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const StatefulForm: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default StatefulForm;
