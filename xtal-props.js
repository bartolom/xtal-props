var xtal;
(function (xtal) {
    var elements;
    (function (elements) {
        function initXtalProps() {
            if (customElements.get('xtal-props'))
                return;
            /**
            * `xtal-props`
            * Polymer based object viewer / editor.
            *
            *
            * @customElement
            * @polymer
            * @demo demo/index.html
            */
            class XtalProps extends Polymer.Element {
                static get is() { return 'xtal-props'; }
                static get properties() {
                    return {
                        debug: {
                            type: Boolean,
                            observer: 'onEnableDebugging'
                        },
                        /**
                        * The expression that points to an object to edit.
                        */
                        watch: {
                            type: Object,
                            observer: 'onPropsChange'
                        },
                        primitiveCEProps: {
                            type: Array,
                        },
                        elementName: {
                            type: String
                        }
                    };
                }
                displayDebugView(e, CE_ProtoType) {
                    this.style.display = 'block';
                    //const objToEdit = {};
                    //const ownProps = Object.getOwnPropertyNames(e.srcElement);
                    // ownProps.forEach(name => {
                    //     if(name.startsWith('_')) return;
                    //     if(this.namesToBlock.indexOf(name) !==-1 ) return;
                    //     objToEdit[name] = e.srcElement[name];
                    // });
                    const polyProps = CE_ProtoType.properties;
                    const ce = e.srcElement;
                    if (polyProps) {
                        const primitiveCEProps = [];
                        for (const key in polyProps) {
                            const polyProp = polyProps[key];
                            const newProp = {
                                name: key,
                                val: ce[key],
                                type: polyProp.type.name,
                            };
                            console.log(newProp);
                            primitiveCEProps.push(newProp);
                        }
                        this.primitiveCEProps = primitiveCEProps;
                    }
                    // if(CE)
                    // console.log(objToEdit);
                    // this.watch = objToEdit;
                }
                onEnableDebugging() {
                    if (this.debug) {
                        this.style.display = 'none';
                        const _this = this;
                        document.body.addEventListener('click', e => {
                            if (e.ctrlKey) {
                                const tn = e.srcElement.tagName.toLowerCase();
                                if (tn.indexOf('-') > -1) {
                                    const CE_ProtoType = customElements.get(tn);
                                    if (CE_ProtoType) {
                                        console.log('enableDebug');
                                        this.elementName = tn;
                                        _this.displayDebugView(e, CE_ProtoType);
                                    }
                                }
                            }
                        });
                    }
                }
            }
            customElements.define(XtalProps.is, XtalProps);
        }
        const testSyncKey = 'xtal_elements_props';
        if (window[testSyncKey]) {
            initXtalProps();
            delete window[testSyncKey];
        }
        else {
            customElements.whenDefined('poly-prep').then(() => {
                initXtalProps();
            });
            customElements.whenDefined('full-poly-prep').then(() => {
                initXtalProps();
            });
        }
        initXtalProps();
    })(elements = xtal.elements || (xtal.elements = {}));
})(xtal || (xtal = {}));
//# sourceMappingURL=xtal-props.js.map