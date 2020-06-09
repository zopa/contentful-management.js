import { MetaSysProps, DefaultElements, CollectionProp } from '../common-types';
import { AxiosInstance } from 'axios';
declare type Field = 'Symbol' | 'Text' | 'RichText' | 'Integer' | 'Number' | 'Date' | 'Location' | 'Boolean' | 'Object';
declare type LinkType = 'Asset' | 'Entry';
interface SingleFieldType {
    type: Field;
}
interface LinkFieldType {
    type: 'Link';
    linkType: LinkType;
}
interface ArrayFieldType {
    type: 'Array';
    items: SingleFieldType | LinkFieldType;
}
declare type FieldType = SingleFieldType | LinkFieldType | ArrayFieldType;
declare type AppLocation = 'app-config' | 'entry-sidebar' | 'entry-editor' | 'dialog' | 'page';
interface SingleLocationDefinition {
    location: AppLocation;
}
interface EntryFieldLocationDefinition {
    location: 'entry-field';
    fieldTypes: FieldType[];
}
declare type LocationDefinition = SingleLocationDefinition | EntryFieldLocationDefinition;
export declare type AppDefinitionProps = {
    /**
     * System metadata
     */
    sys: MetaSysProps;
    /**
     * App name
     */
    name: string;
    /**
     * URL where the root HTML document of the app can be found
     */
    src: string;
    /**
     * Locations where the app can be installed
     */
    locations: LocationDefinition[];
};
export interface AppDefinition extends AppDefinitionProps, DefaultElements<AppDefinitionProps> {
    /**
     * Deletes this object on the server.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getAppDefinition('<ui_extension_id>'))
     * .then((appDefinition) => appDefinition.delete())
     * .then(() => console.log(`App Definition deleted.`))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
    /**
     * Sends an update to the server with any changes made to the object's properties
     * @return Object returned from the server with updated changes.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getSpace('<space_id>')
     * .then((space) => space.getAppDefinition('<ui_extension_id>'))
     * .then((appDefinition) => {
     *   appDefinition.extension.name = 'New App Definition name'
     *   return appDefinition.update()
     * })
     * .then((appDefinition) => console.log(`App Definition ${appDefinition.sys.id} updated.`))
     * .catch(console.error)
     * ```
     */
    update(): Promise<AppDefinition>;
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw App Definition data
 * @return Wrapped App Definition data
 */
export declare function wrapAppDefinition(http: AxiosInstance, data: AppDefinitionProps): {
    update: () => Promise<AppDefinition>;
    delete: () => Promise<void>;
} & AppDefinitionProps & {
    toPlainObject(): AppDefinitionProps;
};
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw App Definition collection data
 * @return Wrapped App Definition collection data
 */
export declare function wrapAppDefinitionCollection(http: AxiosInstance, data: CollectionProp<AppDefinitionProps>): CollectionProp<AppDefinitionProps> & {
    toPlainObject(): CollectionProp<AppDefinitionProps>;
};
export {};