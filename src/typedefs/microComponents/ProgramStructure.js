/**
* @typedef import('../navTypeDefs.js").routeItem
*/

/**
 * @typedef {Object} ProgramStructureItemProps
 * @property {string=} heroText
 * @property {string} headerText
 * @property {string} contentText
 * @property {routeItem=} readMore
 * @property {string=} price
 * @property {string=} type Values: included|optional
 */

/**
 * @typedef {Object} ProgramStructureProps
 * @property {string} joinSymbol
 * @property {Array<ProgramStructureItemProps>} items
 */