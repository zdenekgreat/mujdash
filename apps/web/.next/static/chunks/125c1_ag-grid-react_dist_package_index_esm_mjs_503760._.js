(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/125c1_ag-grid-react_dist_package_index_esm_mjs_503760._.js", {

"[project]/node_modules/.pnpm/ag-grid-react@35.0.1_react-_ab181e2c947ad84f73228a8876664370/node_modules/ag-grid-react/dist/package/index.esm.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// packages/ag-grid-react/src/agGridReact.tsx
__turbopack_esm__({
    "AgGridReact": (()=>AgGridReact),
    "CustomComponentContext": (()=>CustomContext),
    "getInstance": (()=>getInstance),
    "useGridCellEditor": (()=>useGridCellEditor),
    "useGridDate": (()=>useGridDate),
    "useGridFilter": (()=>useGridFilter),
    "useGridFilterDisplay": (()=>useGridFilterDisplay),
    "useGridFloatingFilter": (()=>useGridFloatingFilter),
    "useGridMenuItem": (()=>useGridMenuItem),
    "warnReactiveCustomComponents": (()=>warnReactiveCustomComponents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ag-grid-community@35.0.1/node_modules/ag-grid-community/dist/package/main.esm.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
var BeansContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
var RenderModeContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext("default");
// packages/ag-grid-react/src/reactUi/jsComp.tsx
var showJsComp = (compDetails, context, eParent, ref)=>{
    const doNothing = !compDetails || compDetails.componentFromFramework || context.isDestroyed();
    if (doNothing) {
        return;
    }
    const promise = compDetails.newAgStackInstance();
    let comp;
    let compGui;
    let destroyed = false;
    promise.then((c)=>{
        if (destroyed) {
            context.destroyBean(c);
            return;
        }
        comp = c;
        compGui = comp.getGui();
        eParent.appendChild(compGui);
        setRef(ref, comp);
    });
    return ()=>{
        destroyed = true;
        if (!comp) {
            return;
        }
        compGui?.remove();
        context.destroyBean(comp);
        if (ref) {
            setRef(ref, void 0);
        }
    };
};
var setRef = (ref, value)=>{
    if (!ref) {
        return;
    }
    if (ref instanceof Function) {
        const refCallback = ref;
        refCallback(value);
    } else {
        const refObj = ref;
        refObj.current = value;
    }
};
;
;
var classesList = (...list)=>{
    const filtered = list.filter((s)=>s != null && s !== "");
    return filtered.join(" ");
};
var CssClasses = class _CssClasses {
    constructor(...initialClasses){
        this.classesMap = {};
        for (const className of initialClasses){
            this.classesMap[className] = true;
        }
    }
    setClass(className, on) {
        const nothingHasChanged = !!this.classesMap[className] == on;
        if (nothingHasChanged) {
            return this;
        }
        const res = new _CssClasses();
        res.classesMap = {
            ...this.classesMap
        };
        res.classesMap[className] = on;
        return res;
    }
    toString() {
        const res = Object.keys(this.classesMap).filter((key)=>this.classesMap[key]).join(" ");
        return res;
    }
};
var isComponentStateless = (Component2)=>{
    const hasSymbol = ()=>typeof Symbol === "function" && Symbol.for;
    const getMemoType = ()=>hasSymbol() ? Symbol.for("react.memo") : 60115;
    return typeof Component2 === "function" && !(Component2.prototype && Component2.prototype.isReactComponent) || typeof Component2 === "object" && Component2.$$typeof === getMemoType();
};
var reactVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version?.split(".")[0];
var isReactVersion17Minus = reactVersion === "16" || reactVersion === "17";
function isReact19() {
    return reactVersion === "19";
}
var disableFlushSync = false;
function runWithoutFlushSync(func) {
    if (!disableFlushSync) {
        setTimeout(()=>disableFlushSync = false, 0);
    }
    disableFlushSync = true;
    return func();
}
var agFlushSync = (useFlushSync, fn)=>{
    if (!isReactVersion17Minus && useFlushSync && !disableFlushSync) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync(fn);
    } else {
        fn();
    }
};
var agStartTransition = (fn)=>{
    if (!isReactVersion17Minus) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].startTransition(fn);
    } else {
        fn();
    }
};
function agUseSyncExternalStore(subscribe, getSnapshot, defaultSnapshot) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(subscribe, getSnapshot);
    } else {
        return defaultSnapshot;
    }
}
function getNextValueIfDifferent(prev, next, maintainOrder) {
    if (next == null || prev == null) {
        return next;
    }
    if (prev === next || next.length === 0 && prev.length === 0) {
        return prev;
    }
    if (maintainOrder || prev.length === 0 && next.length > 0 || prev.length > 0 && next.length === 0) {
        return next;
    }
    const oldValues = [];
    const newValues = [];
    const prevMap = /* @__PURE__ */ new Map();
    const nextMap = /* @__PURE__ */ new Map();
    for(let i = 0; i < next.length; i++){
        const c = next[i];
        nextMap.set(c.instanceId, c);
    }
    for(let i = 0; i < prev.length; i++){
        const c = prev[i];
        prevMap.set(c.instanceId, c);
        if (nextMap.has(c.instanceId)) {
            oldValues.push(c);
        }
    }
    for(let i = 0; i < next.length; i++){
        const c = next[i];
        const instanceId = c.instanceId;
        if (!prevMap.has(instanceId)) {
            newValues.push(c);
        }
    }
    if (oldValues.length === prev.length && newValues.length === 0) {
        return prev;
    }
    if (oldValues.length === 0 && newValues.length === next.length) {
        return next;
    }
    if (oldValues.length === 0) {
        return newValues;
    }
    if (newValues.length === 0) {
        return oldValues;
    }
    return [
        ...oldValues,
        ...newValues
    ];
}
// packages/ag-grid-react/src/reactUi/cellRenderer/groupCellRenderer.tsx
var GroupCellRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { registry, context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eCheckboxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eExpandedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eContractedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [innerCompDetails, setInnerCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [childCount, setChildCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GroupCellRenderer.useState": ()=>new CssClasses()
    }["GroupCellRenderer.useState"]);
    const [expandedCssClasses, setExpandedCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GroupCellRenderer.useState": ()=>new CssClasses("ag-hidden")
    }["GroupCellRenderer.useState"]);
    const [contractedCssClasses, setContractedCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GroupCellRenderer.useState": ()=>new CssClasses("ag-hidden")
    }["GroupCellRenderer.useState"]);
    const [checkboxCssClasses, setCheckboxCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GroupCellRenderer.useState": ()=>new CssClasses("ag-invisible")
    }["GroupCellRenderer.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "GroupCellRenderer.useImperativeHandle": ()=>{
            return {
                // force new instance when grid tries to refresh
                refresh () {
                    return false;
                }
            };
        }
    }["GroupCellRenderer.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "GroupCellRenderer.useLayoutEffect": ()=>{
            return showJsComp(innerCompDetails, context, eValueRef.current);
        }
    }["GroupCellRenderer.useLayoutEffect"], [
        innerCompDetails
    ]);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GroupCellRenderer.useCallback[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || context.isDestroyed()) {
                ctrlRef.current = context.destroyBean(ctrlRef.current);
                return;
            }
            const compProxy = {
                setInnerRenderer: {
                    "GroupCellRenderer.useCallback[setRef2]": (details, valueToDisplay)=>{
                        setInnerCompDetails(details);
                        setValue(valueToDisplay);
                    }
                }["GroupCellRenderer.useCallback[setRef2]"],
                setChildCount: {
                    "GroupCellRenderer.useCallback[setRef2]": (count)=>setChildCount(count)
                }["GroupCellRenderer.useCallback[setRef2]"],
                toggleCss: {
                    "GroupCellRenderer.useCallback[setRef2]": (name, on)=>setCssClasses({
                            "GroupCellRenderer.useCallback[setRef2]": (prev)=>prev.setClass(name, on)
                        }["GroupCellRenderer.useCallback[setRef2]"])
                }["GroupCellRenderer.useCallback[setRef2]"],
                setContractedDisplayed: {
                    "GroupCellRenderer.useCallback[setRef2]": (displayed)=>setContractedCssClasses({
                            "GroupCellRenderer.useCallback[setRef2]": (prev)=>prev.setClass("ag-hidden", !displayed)
                        }["GroupCellRenderer.useCallback[setRef2]"])
                }["GroupCellRenderer.useCallback[setRef2]"],
                setExpandedDisplayed: {
                    "GroupCellRenderer.useCallback[setRef2]": (displayed)=>setExpandedCssClasses({
                            "GroupCellRenderer.useCallback[setRef2]": (prev)=>prev.setClass("ag-hidden", !displayed)
                        }["GroupCellRenderer.useCallback[setRef2]"])
                }["GroupCellRenderer.useCallback[setRef2]"],
                setCheckboxVisible: {
                    "GroupCellRenderer.useCallback[setRef2]": (visible)=>setCheckboxCssClasses({
                            "GroupCellRenderer.useCallback[setRef2]": (prev)=>prev.setClass("ag-invisible", !visible)
                        }["GroupCellRenderer.useCallback[setRef2]"])
                }["GroupCellRenderer.useCallback[setRef2]"],
                setCheckboxSpacing: {
                    "GroupCellRenderer.useCallback[setRef2]": (add)=>setCheckboxCssClasses({
                            "GroupCellRenderer.useCallback[setRef2]": (prev)=>prev.setClass("ag-group-checkbox-spacing", add)
                        }["GroupCellRenderer.useCallback[setRef2]"])
                }["GroupCellRenderer.useCallback[setRef2]"]
            };
            const groupCellRendererCtrl = registry.createDynamicBean("groupCellRendererCtrl", true);
            if (groupCellRendererCtrl) {
                ctrlRef.current = context.createBean(groupCellRendererCtrl);
                ctrlRef.current.init(compProxy, eRef, eCheckboxRef.current, eExpandedRef.current, eContractedRef.current, GroupCellRenderer, props);
            }
        }
    }["GroupCellRenderer.useCallback[setRef2]"], []);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroupCellRenderer.useMemo[className]": ()=>`ag-cell-wrapper ${cssClasses.toString()}`
    }["GroupCellRenderer.useMemo[className]"], [
        cssClasses
    ]);
    const expandedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroupCellRenderer.useMemo[expandedClassName]": ()=>`ag-group-expanded ${expandedCssClasses.toString()}`
    }["GroupCellRenderer.useMemo[expandedClassName]"], [
        expandedCssClasses
    ]);
    const contractedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroupCellRenderer.useMemo[contractedClassName]": ()=>`ag-group-contracted ${contractedCssClasses.toString()}`
    }["GroupCellRenderer.useMemo[contractedClassName]"], [
        contractedCssClasses
    ]);
    const checkboxClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroupCellRenderer.useMemo[checkboxClassName]": ()=>`ag-group-checkbox ${checkboxCssClasses.toString()}`
    }["GroupCellRenderer.useMemo[checkboxClassName]"], [
        checkboxCssClasses
    ]);
    const useFwRenderer = innerCompDetails?.componentFromFramework;
    const FwRenderer = useFwRenderer ? innerCompDetails.componentClass : void 0;
    const useValue = innerCompDetails == null && value != null;
    const escapedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toString"])(value);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className,
        ref: setRef2,
        ...!props.colDef ? {
            role: ctrlRef.current?.getCellAriaRole()
        } : {}
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: expandedClassName,
        ref: eExpandedRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: contractedClassName,
        ref: eContractedRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: checkboxClassName,
        ref: eCheckboxRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "ag-group-value",
        ref: eValueRef
    }, useValue ? escapedValue : useFwRenderer ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FwRenderer, {
        ...innerCompDetails.params
    }) : null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "ag-group-child-count"
    }, childCount));
});
var groupCellRenderer_default = GroupCellRenderer;
;
;
;
var CustomContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    setMethods: ()=>{}
});
// packages/ag-grid-react/src/reactUi/customComp/customWrapperComp.tsx
var CustomWrapperComp = (params)=>{
    const { initialProps, addUpdateCallback, CustomComponentClass, setMethods } = params;
    const [{ key, ...props }, setProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomWrapperComp.useEffect": ()=>{
            addUpdateCallback({
                "CustomWrapperComp.useEffect": (newProps)=>setProps(newProps)
            }["CustomWrapperComp.useEffect"]);
        }
    }["CustomWrapperComp.useEffect"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomContext.Provider, {
        value: {
            setMethods
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomComponentClass, {
        key,
        ...props
    }));
};
var customWrapperComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(CustomWrapperComp);
;
;
;
// packages/ag-grid-react/src/shared/keyGenerator.ts
var counter = 0;
function generateNewKey() {
    return `agPortalKey_${++counter}`;
}
// packages/ag-grid-react/src/shared/reactComponent.ts
var ReactComponent = class {
    constructor(reactComponent, portalManager, componentType, suppressFallbackMethods){
        this.portal = null;
        this.oldPortal = null;
        this.reactComponent = reactComponent;
        this.portalManager = portalManager;
        this.componentType = componentType;
        this.suppressFallbackMethods = !!suppressFallbackMethods;
        this.statelessComponent = this.isStateless(this.reactComponent);
        this.key = generateNewKey();
        this.portalKey = generateNewKey();
        this.instanceCreated = this.isStatelessComponent() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"].resolve(false) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            this.resolveInstanceCreated = resolve;
        });
    }
    getGui() {
        return this.eParentElement;
    }
    /** `getGui()` returns the parent element. This returns the actual root element. */ getRootElement() {
        const firstChild = this.eParentElement.firstChild;
        return firstChild;
    }
    destroy() {
        if (this.componentInstance && typeof this.componentInstance.destroy == "function") {
            this.componentInstance.destroy();
        }
        const portal = this.portal;
        if (portal) {
            this.portalManager.destroyPortal(portal);
        }
    }
    createParentElement(params) {
        const componentWrappingElement = this.portalManager.getComponentWrappingElement();
        const eParentElement = document.createElement(componentWrappingElement || "div");
        eParentElement.classList.add("ag-react-container");
        params.reactContainer = eParentElement;
        return eParentElement;
    }
    statelessComponentRendered() {
        return this.eParentElement.childElementCount > 0 || this.eParentElement.childNodes.length > 0;
    }
    getFrameworkComponentInstance() {
        return this.componentInstance;
    }
    isStatelessComponent() {
        return this.statelessComponent;
    }
    getReactComponentName() {
        return this.reactComponent.name;
    }
    getMemoType() {
        return this.hasSymbol() ? Symbol.for("react.memo") : 60115;
    }
    hasSymbol() {
        return typeof Symbol === "function" && Symbol.for;
    }
    isStateless(Component2) {
        return typeof Component2 === "function" && !(Component2.prototype && Component2.prototype.isReactComponent) || typeof Component2 === "object" && Component2.$$typeof === this.getMemoType();
    }
    hasMethod(name) {
        const frameworkComponentInstance = this.getFrameworkComponentInstance();
        return !!frameworkComponentInstance && frameworkComponentInstance[name] != null || this.fallbackMethodAvailable(name);
    }
    callMethod(name, args) {
        const frameworkComponentInstance = this.getFrameworkComponentInstance();
        if (this.isStatelessComponent()) {
            return this.fallbackMethod(name, !!args && args[0] ? args[0] : {});
        } else if (!frameworkComponentInstance) {
            setTimeout(()=>this.callMethod(name, args));
            return;
        }
        const method = frameworkComponentInstance[name];
        if (method) {
            return method.apply(frameworkComponentInstance, args);
        }
        if (this.fallbackMethodAvailable(name)) {
            return this.fallbackMethod(name, !!args && args[0] ? args[0] : {});
        }
    }
    addMethod(name, callback) {
        this[name] = callback;
    }
    init(params) {
        this.eParentElement = this.createParentElement(params);
        this.createOrUpdatePortal(params);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>this.createReactComponent(resolve));
    }
    createOrUpdatePortal(params) {
        if (!this.isStatelessComponent()) {
            this.ref = (element)=>{
                this.componentInstance = element;
                this.resolveInstanceCreated?.(true);
                this.resolveInstanceCreated = void 0;
            };
            params.ref = this.ref;
        }
        this.reactElement = this.createElement(this.reactComponent, {
            ...params,
            key: this.key
        });
        this.portal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(this.reactElement, this.eParentElement, this.portalKey);
    }
    createElement(reactComponent, props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(reactComponent, props);
    }
    createReactComponent(resolve) {
        this.portalManager.mountReactPortal(this.portal, this, resolve);
    }
    rendered() {
        return this.isStatelessComponent() && this.statelessComponentRendered() || !!(!this.isStatelessComponent() && this.getFrameworkComponentInstance());
    }
    /*
   * fallback methods - these will be invoked if a corresponding instance method is not present
   * for example if refresh is called and is not available on the component instance, then refreshComponent on this
   * class will be invoked instead
   *
   * Currently only refresh is supported
   */ refreshComponent(args) {
        this.oldPortal = this.portal;
        this.createOrUpdatePortal(args);
        this.portalManager.updateReactPortal(this.oldPortal, this.portal);
    }
    fallbackMethod(name, params) {
        const method = this[`${name}Component`];
        if (!this.suppressFallbackMethods && !!method) {
            return method.bind(this)(params);
        }
    }
    fallbackMethodAvailable(name) {
        if (this.suppressFallbackMethods) {
            return false;
        }
        const method = this[`${name}Component`];
        return !!method;
    }
};
// packages/ag-grid-react/src/shared/customComp/customComponentWrapper.ts
function addOptionalMethods(optionalMethodNames, providedMethods, component) {
    for (const methodName of optionalMethodNames){
        const providedMethod = providedMethods[methodName];
        if (providedMethod) {
            component[methodName] = providedMethod;
        }
    }
}
var CustomComponentWrapper = class extends ReactComponent {
    constructor(){
        super(...arguments);
        this.awaitUpdateCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            this.resolveUpdateCallback = resolve;
        });
        this.wrapperComponent = customWrapperComp_default;
    }
    init(params) {
        this.sourceParams = params;
        return super.init(this.getProps());
    }
    addMethod() {}
    getInstance() {
        return this.instanceCreated.then(()=>this.componentInstance);
    }
    getFrameworkComponentInstance() {
        return this;
    }
    createElement(reactComponent, props) {
        return super.createElement(this.wrapperComponent, {
            initialProps: props,
            CustomComponentClass: reactComponent,
            setMethods: (methods)=>this.setMethods(methods),
            addUpdateCallback: (callback)=>{
                this.updateCallback = ()=>{
                    callback(this.getProps());
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
                        setTimeout(()=>{
                            resolve();
                        });
                    });
                };
                this.resolveUpdateCallback();
            }
        });
    }
    setMethods(methods) {
        this.providedMethods = methods;
        addOptionalMethods(this.getOptionalMethods(), this.providedMethods, this);
    }
    getOptionalMethods() {
        return [];
    }
    getProps() {
        return {
            ...this.sourceParams,
            key: this.key,
            ref: this.ref
        };
    }
    refreshProps() {
        if (this.updateCallback) {
            return this.updateCallback();
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>this.awaitUpdateCallback.then(()=>{
                this.updateCallback().then(()=>resolve());
            }));
    }
};
// packages/ag-grid-react/src/shared/customComp/cellRendererComponentWrapper.ts
var CellRendererComponentWrapper = class extends CustomComponentWrapper {
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
        return true;
    }
};
// packages/ag-grid-react/src/shared/customComp/customOverlayComponentWrapper.ts
var CustomOverlayComponentWrapper = class extends CustomComponentWrapper {
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
    }
};
// packages/ag-grid-react/src/shared/customComp/dateComponentWrapper.ts
var DateComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.date = null;
        this.onDateChange = (date)=>this.updateDate(date);
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
        this.refreshProps();
    }
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
    }
    getOptionalMethods() {
        return [
            "afterGuiAttached",
            "setInputPlaceholder",
            "setInputAriaLabel",
            "setDisabled"
        ];
    }
    updateDate(date) {
        this.setDate(date);
        this.sourceParams.onDateChanged();
    }
    getProps() {
        const props = super.getProps();
        props.date = this.date;
        props.onDateChange = this.onDateChange;
        delete props.onDateChanged;
        return props;
    }
};
// packages/ag-grid-react/src/shared/customComp/dragAndDropImageComponentWrapper.ts
var DragAndDropImageComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.label = "";
        this.icon = null;
        this.shake = false;
    }
    setIcon(iconName, shake) {
        this.icon = iconName;
        this.shake = shake;
        this.refreshProps();
    }
    setLabel(label) {
        this.label = label;
        this.refreshProps();
    }
    getProps() {
        const props = super.getProps();
        const { label, icon, shake } = this;
        props.label = label;
        props.icon = icon;
        props.shake = shake;
        return props;
    }
};
;
var FilterComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.model = null;
        this.onModelChange = (model)=>this.updateModel(model);
        this.onUiChange = ()=>this.sourceParams.filterModifiedCallback();
        this.expectingNewMethods = true;
        this.hasBeenActive = false;
        this.awaitSetMethodsCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            this.resolveSetMethodsCallback = resolve;
        });
    }
    isFilterActive() {
        return this.model != null;
    }
    doesFilterPass(params) {
        return this.providedMethods.doesFilterPass(params);
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.expectingNewMethods = true;
        this.model = model;
        this.hasBeenActive || (this.hasBeenActive = this.isFilterActive());
        return this.refreshProps();
    }
    refresh(newParams) {
        this.sourceParams = newParams;
        this.refreshProps();
        return true;
    }
    afterGuiAttached(params) {
        const providedMethods = this.providedMethods;
        if (!providedMethods) {
            this.awaitSetMethodsCallback.then(()=>this.providedMethods?.afterGuiAttached?.(params));
        } else {
            providedMethods.afterGuiAttached?.(params);
        }
    }
    getOptionalMethods() {
        return [
            "afterGuiDetached",
            "onNewRowsLoaded",
            "getModelAsString",
            "onAnyFilterChanged"
        ];
    }
    setMethods(methods) {
        if (this.expectingNewMethods === false && this.hasBeenActive && this.providedMethods?.doesFilterPass !== methods?.doesFilterPass) {
            setTimeout(()=>{
                this.sourceParams.filterChangedCallback();
            });
        }
        this.expectingNewMethods = false;
        super.setMethods(methods);
        this.resolveSetMethodsCallback();
        this.resolveFilterPassCallback?.();
        this.resolveFilterPassCallback = void 0;
    }
    updateModel(model) {
        this.resolveFilterPassCallback?.();
        const awaitFilterPassCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            this.resolveFilterPassCallback = resolve;
        });
        this.setModel(model).then(()=>{
            awaitFilterPassCallback.then(()=>{
                this.sourceParams.filterChangedCallback();
            });
        });
    }
    getProps() {
        const props = super.getProps();
        props.model = this.model;
        props.onModelChange = this.onModelChange;
        props.onUiChange = this.onUiChange;
        delete props.filterChangedCallback;
        return props;
    }
};
;
var FilterDisplayComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.awaitSetMethodsCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            this.resolveSetMethodsCallback = resolve;
        });
    }
    refresh(newParams) {
        this.sourceParams = newParams;
        this.refreshProps();
        return true;
    }
    afterGuiAttached(params) {
        const providedMethods = this.providedMethods;
        if (!providedMethods) {
            this.awaitSetMethodsCallback.then(()=>this.providedMethods?.afterGuiAttached?.(params));
        } else {
            providedMethods.afterGuiAttached?.(params);
        }
    }
    getOptionalMethods() {
        return [
            "afterGuiDetached",
            "onNewRowsLoaded",
            "onAnyFilterChanged"
        ];
    }
    setMethods(methods) {
        super.setMethods(methods);
        this.resolveSetMethodsCallback();
    }
};
;
function updateFloatingFilterParent(params, model) {
    params.parentFilterInstance((instance)=>{
        (instance.setModel(model) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"].resolve()).then(()=>{
            params.filterParams.filterChangedCallback();
        });
    });
}
var FloatingFilterComponentProxy = class {
    constructor(floatingFilterParams, refreshProps){
        this.floatingFilterParams = floatingFilterParams;
        this.refreshProps = refreshProps;
        this.model = null;
        this.onModelChange = (model)=>this.updateModel(model);
    }
    getProps() {
        return {
            ...this.floatingFilterParams,
            model: this.model,
            onModelChange: this.onModelChange
        };
    }
    onParentModelChanged(parentModel) {
        this.model = parentModel;
        this.refreshProps();
    }
    refresh(params) {
        this.floatingFilterParams = params;
        this.refreshProps();
    }
    setMethods(methods) {
        addOptionalMethods(this.getOptionalMethods(), methods, this);
    }
    getOptionalMethods() {
        return [
            "afterGuiAttached"
        ];
    }
    updateModel(model) {
        this.model = model;
        this.refreshProps();
        updateFloatingFilterParent(this.floatingFilterParams, model);
    }
};
// packages/ag-grid-react/src/shared/customComp/floatingFilterComponentWrapper.ts
var FloatingFilterComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.model = null;
        this.onModelChange = (model)=>this.updateModel(model);
    }
    onParentModelChanged(parentModel) {
        this.model = parentModel;
        this.refreshProps();
    }
    refresh(newParams) {
        this.sourceParams = newParams;
        this.refreshProps();
    }
    getOptionalMethods() {
        return [
            "afterGuiAttached"
        ];
    }
    updateModel(model) {
        this.model = model;
        this.refreshProps();
        updateFloatingFilterParent(this.sourceParams, model);
    }
    getProps() {
        const props = super.getProps();
        props.model = this.model;
        props.onModelChange = this.onModelChange;
        return props;
    }
};
// packages/ag-grid-react/src/shared/customComp/floatingFilterDisplayComponentWrapper.ts
var FloatingFilterDisplayComponentWrapper = class extends CustomComponentWrapper {
    refresh(newParams) {
        this.sourceParams = newParams;
        this.refreshProps();
    }
    getOptionalMethods() {
        return [
            "afterGuiAttached"
        ];
    }
};
// packages/ag-grid-react/src/shared/customComp/innerHeaderComponentWrapper.ts
var InnerHeaderComponentWrapper = class extends CustomComponentWrapper {
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
        return true;
    }
};
// packages/ag-grid-react/src/shared/customComp/menuItemComponentWrapper.ts
var MenuItemComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.active = false;
        this.expanded = false;
        this.onActiveChange = (active)=>this.updateActive(active);
    }
    setActive(active) {
        this.awaitSetActive(active);
    }
    setExpanded(expanded) {
        this.expanded = expanded;
        this.refreshProps();
    }
    getOptionalMethods() {
        return [
            "select",
            "configureDefaults"
        ];
    }
    awaitSetActive(active) {
        this.active = active;
        return this.refreshProps();
    }
    updateActive(active) {
        const result = this.awaitSetActive(active);
        if (active) {
            result.then(()=>this.sourceParams.onItemActivated());
        }
    }
    getProps() {
        const props = super.getProps();
        props.active = this.active;
        props.expanded = this.expanded;
        props.onActiveChange = this.onActiveChange;
        delete props.onItemActivated;
        return props;
    }
};
// packages/ag-grid-react/src/shared/customComp/statusPanelComponentWrapper.ts
var StatusPanelComponentWrapper = class extends CustomComponentWrapper {
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
        return true;
    }
};
// packages/ag-grid-react/src/shared/customComp/toolPanelComponentWrapper.ts
var ToolPanelComponentWrapper = class extends CustomComponentWrapper {
    constructor(){
        super(...arguments);
        this.onStateChange = (state)=>this.updateState(state);
    }
    refresh(params) {
        this.sourceParams = params;
        this.refreshProps();
        return true;
    }
    getState() {
        return this.state;
    }
    updateState(state) {
        this.state = state;
        this.refreshProps();
        this.sourceParams.onStateUpdated();
    }
    getProps() {
        const props = super.getProps();
        props.state = this.state;
        props.onStateChange = this.onStateChange;
        return props;
    }
};
;
function getInstance(wrapperComponent, callback) {
    const promise = wrapperComponent?.getInstance?.() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"].resolve(void 0);
    promise.then((comp)=>callback(comp));
}
function warnReactiveCustomComponents() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_warn"])(231);
}
// packages/ag-grid-react/src/shared/portalManager.ts
var MAX_COMPONENT_CREATION_TIME_IN_MS = 1e3;
var PortalManager = class {
    constructor(refresher, wrappingElement, maxComponentCreationTimeMs){
        this.destroyed = false;
        this.portals = [];
        this.hasPendingPortalUpdate = false;
        this.wrappingElement = wrappingElement ? wrappingElement : "div";
        this.refresher = refresher;
        this.maxComponentCreationTimeMs = maxComponentCreationTimeMs ? maxComponentCreationTimeMs : MAX_COMPONENT_CREATION_TIME_IN_MS;
    }
    getPortals() {
        return this.portals;
    }
    destroy() {
        this.destroyed = true;
    }
    destroyPortal(portal) {
        this.portals = this.portals.filter((curPortal)=>curPortal !== portal);
        this.batchUpdate();
    }
    getComponentWrappingElement() {
        return this.wrappingElement;
    }
    mountReactPortal(portal, reactComponent, resolve) {
        this.portals = [
            ...this.portals,
            portal
        ];
        this.waitForInstance(reactComponent, resolve);
        this.batchUpdate();
    }
    updateReactPortal(oldPortal, newPortal) {
        this.portals[this.portals.indexOf(oldPortal)] = newPortal;
        this.batchUpdate();
    }
    batchUpdate() {
        if (this.hasPendingPortalUpdate) {
            return;
        }
        setTimeout(()=>{
            if (!this.destroyed) {
                this.refresher();
                this.hasPendingPortalUpdate = false;
            }
        });
        this.hasPendingPortalUpdate = true;
    }
    waitForInstance(reactComponent, resolve, startTime = Date.now()) {
        if (this.destroyed) {
            resolve(null);
            return;
        }
        if (reactComponent.rendered()) {
            resolve(reactComponent);
        } else {
            if (Date.now() - startTime >= this.maxComponentCreationTimeMs && !this.hasPendingPortalUpdate) {
                agFlushSync(true, ()=>this.refresher());
                if (reactComponent.rendered()) {
                    resolve(reactComponent);
                }
                return;
            }
            window.setTimeout(()=>{
                this.waitForInstance(reactComponent, resolve, startTime);
            });
        }
    }
};
;
;
;
;
;
;
;
;
;
;
;
;
var HeaderCellComp = ({ ctrl })=>{
    const isAlive = ctrl.isAlive();
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const [userCompDetails, setUserCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eHeaderCompWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (isAlive && !cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eGui.current);
    }
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderCellComp.useCallback2[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
                compBean.current = context.destroyBean(compBean.current);
                return;
            }
            compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_EmptyBean"]());
            const refreshSelectAllGui = {
                "HeaderCellComp.useCallback2[setRef2].refreshSelectAllGui": ()=>{
                    const selectAllGui = ctrl.getSelectAllGui();
                    if (selectAllGui) {
                        eResize.current?.insertAdjacentElement("afterend", selectAllGui);
                        compBean.current.addDestroyFunc({
                            "HeaderCellComp.useCallback2[setRef2].refreshSelectAllGui": ()=>selectAllGui.remove()
                        }["HeaderCellComp.useCallback2[setRef2].refreshSelectAllGui"]);
                    }
                }
            }["HeaderCellComp.useCallback2[setRef2].refreshSelectAllGui"];
            const compProxy = {
                setWidth: {
                    "HeaderCellComp.useCallback2[setRef2]": (width)=>{
                        if (eGui.current) {
                            eGui.current.style.width = width;
                        }
                    }
                }["HeaderCellComp.useCallback2[setRef2]"],
                toggleCss: {
                    "HeaderCellComp.useCallback2[setRef2]": (name, on)=>cssManager.current.toggleCss(name, on)
                }["HeaderCellComp.useCallback2[setRef2]"],
                setUserStyles: {
                    "HeaderCellComp.useCallback2[setRef2]": (styles)=>setUserStyles(styles)
                }["HeaderCellComp.useCallback2[setRef2]"],
                setAriaSort: {
                    "HeaderCellComp.useCallback2[setRef2]": (sort)=>{
                        if (eGui.current) {
                            sort ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setAriaSort"])(eGui.current, sort) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_removeAriaSort"])(eGui.current);
                        }
                    }
                }["HeaderCellComp.useCallback2[setRef2]"],
                setUserCompDetails: {
                    "HeaderCellComp.useCallback2[setRef2]": (compDetails)=>setUserCompDetails(compDetails)
                }["HeaderCellComp.useCallback2[setRef2]"],
                getUserCompInstance: {
                    "HeaderCellComp.useCallback2[setRef2]": ()=>userCompRef.current || void 0
                }["HeaderCellComp.useCallback2[setRef2]"],
                refreshSelectAllGui,
                removeSelectAllGui: {
                    "HeaderCellComp.useCallback2[setRef2]": ()=>ctrl.getSelectAllGui()?.remove()
                }["HeaderCellComp.useCallback2[setRef2]"]
            };
            ctrl.setComp(compProxy, eRef, eResize.current, eHeaderCompWrapper.current, compBean.current);
            refreshSelectAllGui();
        }
    }["HeaderCellComp.useCallback2[setRef2]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "HeaderCellComp.useLayoutEffect2": ()=>showJsComp(userCompDetails, context, eHeaderCompWrapper.current, userCompRef)
    }["HeaderCellComp.useLayoutEffect2"], [
        userCompDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderCellComp.useEffect2": ()=>{
            ctrl.setDragSource(eGui.current);
        }
    }["HeaderCellComp.useEffect2"], [
        userCompDetails
    ]);
    const userCompStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderCellComp.useMemo2[userCompStateless]": ()=>{
            const res = userCompDetails?.componentFromFramework && isComponentStateless(userCompDetails.componentClass);
            return !!res;
        }
    }["HeaderCellComp.useMemo2[userCompStateless]"], [
        userCompDetails
    ]);
    const reactUserComp = userCompDetails?.componentFromFramework;
    const UserCompClass = userCompDetails?.componentClass;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        style: userStyles,
        className: "ag-header-cell",
        role: "columnheader"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eResize,
        className: "ag-header-cell-resize",
        role: "presentation"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eHeaderCompWrapper,
        className: "ag-header-cell-comp-wrapper",
        role: "presentation"
    }, reactUserComp ? userCompStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params,
        ref: userCompRef
    }) : null));
};
var headerCellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(HeaderCellComp);
;
;
// packages/ag-grid-react/src/shared/customComp/floatingFilterDisplayComponentProxy.ts
var FloatingFilterDisplayComponentProxy = class {
    constructor(floatingFilterParams, refreshProps){
        this.floatingFilterParams = floatingFilterParams;
        this.refreshProps = refreshProps;
    }
    getProps() {
        return this.floatingFilterParams;
    }
    refresh(params) {
        this.floatingFilterParams = params;
        this.refreshProps();
    }
    setMethods(methods) {
        addOptionalMethods(this.getOptionalMethods(), methods, this);
    }
    getOptionalMethods() {
        return [
            "afterGuiAttached"
        ];
    }
};
// packages/ag-grid-react/src/reactUi/header/headerFilterCellComp.tsx
var HeaderFilterCellComp = ({ ctrl })=>{
    const { context, gos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderFilterCellComp.useState4": ()=>new CssClasses("ag-header-cell", "ag-floating-filter")
    }["HeaderFilterCellComp.useState4"]);
    const [cssBodyClasses, setBodyCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderFilterCellComp.useState4": ()=>new CssClasses()
    }["HeaderFilterCellComp.useState4"]);
    const [cssButtonWrapperClasses, setButtonWrapperCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderFilterCellComp.useState4": ()=>new CssClasses("ag-floating-filter-button", "ag-hidden")
    }["HeaderFilterCellComp.useState4"]);
    const [buttonWrapperAriaHidden, setButtonWrapperAriaHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("false");
    const [userCompDetails, setUserCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eFloatingFilterBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eButtonWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eButtonShowMainFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userCompResolve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const userCompPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const userCompRef = (value)=>{
        if (value == null) {
            return;
        }
        userCompResolve.current && userCompResolve.current(value);
    };
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderFilterCellComp.useCallback3[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
                compBean.current = context.destroyBean(compBean.current);
                return;
            }
            compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_EmptyBean"]());
            userCompPromise.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]({
                "HeaderFilterCellComp.useCallback3[setRef2]": (resolve)=>{
                    userCompResolve.current = resolve;
                }
            }["HeaderFilterCellComp.useCallback3[setRef2]"]);
            const compProxy = {
                toggleCss: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (name, on)=>setCssClasses({
                            "HeaderFilterCellComp.useCallback3[setRef2]": (prev)=>prev.setClass(name, on)
                        }["HeaderFilterCellComp.useCallback3[setRef2]"])
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                setUserStyles: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (styles)=>setUserStyles(styles)
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                addOrRemoveBodyCssClass: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (name, on)=>setBodyCssClasses({
                            "HeaderFilterCellComp.useCallback3[setRef2]": (prev)=>prev.setClass(name, on)
                        }["HeaderFilterCellComp.useCallback3[setRef2]"])
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                setButtonWrapperDisplayed: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (displayed)=>{
                        setButtonWrapperCssClasses({
                            "HeaderFilterCellComp.useCallback3[setRef2]": (prev)=>prev.setClass("ag-hidden", !displayed)
                        }["HeaderFilterCellComp.useCallback3[setRef2]"]);
                        setButtonWrapperAriaHidden(!displayed ? "true" : "false");
                    }
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                setWidth: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (width)=>{
                        if (eGui.current) {
                            eGui.current.style.width = width;
                        }
                    }
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                setCompDetails: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (compDetails)=>setUserCompDetails(compDetails)
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                getFloatingFilterComp: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": ()=>userCompPromise.current ? userCompPromise.current : null
                }["HeaderFilterCellComp.useCallback3[setRef2]"],
                setMenuIcon: {
                    "HeaderFilterCellComp.useCallback3[setRef2]": (eIcon)=>eButtonShowMainFilter.current?.appendChild(eIcon)
                }["HeaderFilterCellComp.useCallback3[setRef2]"]
            };
            ctrl.setComp(compProxy, eRef, eButtonShowMainFilter.current, eFloatingFilterBody.current, compBean.current);
        }
    }["HeaderFilterCellComp.useCallback3[setRef2]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "HeaderFilterCellComp.useLayoutEffect3": ()=>showJsComp(userCompDetails, context, eFloatingFilterBody.current, userCompRef)
    }["HeaderFilterCellComp.useLayoutEffect3"], [
        userCompDetails
    ]);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderFilterCellComp.useMemo3[className]": ()=>cssClasses.toString()
    }["HeaderFilterCellComp.useMemo3[className]"], [
        cssClasses
    ]);
    const bodyClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderFilterCellComp.useMemo3[bodyClassName]": ()=>cssBodyClasses.toString()
    }["HeaderFilterCellComp.useMemo3[bodyClassName]"], [
        cssBodyClasses
    ]);
    const buttonWrapperClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderFilterCellComp.useMemo3[buttonWrapperClassName]": ()=>cssButtonWrapperClasses.toString()
    }["HeaderFilterCellComp.useMemo3[buttonWrapperClassName]"], [
        cssButtonWrapperClasses
    ]);
    const userCompStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderFilterCellComp.useMemo3[userCompStateless]": ()=>{
            const res = userCompDetails && userCompDetails.componentFromFramework && isComponentStateless(userCompDetails.componentClass);
            return !!res;
        }
    }["HeaderFilterCellComp.useMemo3[userCompStateless]"], [
        userCompDetails
    ]);
    const reactiveCustomComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderFilterCellComp.useMemo3[reactiveCustomComponents]": ()=>gos.get("reactiveCustomComponents")
    }["HeaderFilterCellComp.useMemo3[reactiveCustomComponents]"], []);
    const enableFilterHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderFilterCellComp.useMemo3[enableFilterHandlers]": ()=>gos.get("enableFilterHandlers")
    }["HeaderFilterCellComp.useMemo3[enableFilterHandlers]"], []);
    const [floatingFilterCompProxy, setFloatingFilterCompProxy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderFilterCellComp.useEffect3": ()=>{
            if (userCompDetails?.componentFromFramework) {
                if (reactiveCustomComponents) {
                    const ProxyClass = enableFilterHandlers ? FloatingFilterDisplayComponentProxy : FloatingFilterComponentProxy;
                    const compProxy = new ProxyClass(userCompDetails.params, {
                        "HeaderFilterCellComp.useEffect3": ()=>setRenderKey({
                                "HeaderFilterCellComp.useEffect3": (prev)=>prev + 1
                            }["HeaderFilterCellComp.useEffect3"])
                    }["HeaderFilterCellComp.useEffect3"]);
                    userCompRef(compProxy);
                    setFloatingFilterCompProxy(compProxy);
                } else {
                    warnReactiveCustomComponents();
                }
            }
        }
    }["HeaderFilterCellComp.useEffect3"], [
        userCompDetails
    ]);
    const floatingFilterProps = floatingFilterCompProxy?.getProps();
    const reactUserComp = userCompDetails?.componentFromFramework;
    const UserCompClass = userCompDetails?.componentClass;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        style: userStyles,
        className,
        role: "gridcell"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eFloatingFilterBody,
        className: bodyClassName,
        role: "presentation"
    }, reactUserComp ? reactiveCustomComponents ? floatingFilterProps && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomContext.Provider, {
        value: {
            setMethods: (methods)=>floatingFilterCompProxy.setMethods(methods)
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...floatingFilterProps
    })) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params,
        ref: userCompStateless ? ()=>{} : userCompRef
    }) : null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eButtonWrapper,
        "aria-hidden": buttonWrapperAriaHidden,
        className: buttonWrapperClassName,
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ref: eButtonShowMainFilter,
        type: "button",
        className: "ag-button ag-floating-filter-button-button",
        tabIndex: -1
    })));
};
var headerFilterCellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(HeaderFilterCellComp);
;
;
var HeaderGroupCellComp = ({ ctrl })=>{
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderGroupCellComp.useState5": ()=>new CssClasses()
    }["HeaderGroupCellComp.useState5"]);
    const [cssResizableClasses, setResizableCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderGroupCellComp.useState5": ()=>new CssClasses()
    }["HeaderGroupCellComp.useState5"]);
    const [resizableAriaHidden, setResizableAriaHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("false");
    const [ariaExpanded, setAriaExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [userCompDetails, setUserCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eHeaderCompWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderGroupCellComp.useCallback4[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
                compBean.current = context.destroyBean(compBean.current);
                return;
            }
            compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_EmptyBean"]());
            const compProxy = {
                setWidth: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (width)=>{
                        if (eGui.current) {
                            eGui.current.style.width = width;
                        }
                    }
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                toggleCss: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (name, on)=>setCssClasses({
                            "HeaderGroupCellComp.useCallback4[setRef2]": (prev)=>prev.setClass(name, on)
                        }["HeaderGroupCellComp.useCallback4[setRef2]"])
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                setUserStyles: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (styles)=>setUserStyles(styles)
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                setHeaderWrapperHidden: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (hidden)=>{
                        const headerCompWrapper = eHeaderCompWrapper.current;
                        if (!headerCompWrapper) {
                            return;
                        }
                        if (hidden) {
                            headerCompWrapper.style.setProperty("display", "none");
                        } else {
                            headerCompWrapper.style.removeProperty("display");
                        }
                    }
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                setHeaderWrapperMaxHeight: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (value)=>{
                        const headerCompWrapper = eHeaderCompWrapper.current;
                        if (!headerCompWrapper) {
                            return;
                        }
                        if (value != null) {
                            headerCompWrapper.style.setProperty("max-height", `${value}px`);
                        } else {
                            headerCompWrapper.style.removeProperty("max-height");
                        }
                        headerCompWrapper.classList.toggle("ag-header-cell-comp-wrapper-limited-height", value != null);
                    }
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                setUserCompDetails: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (compDetails)=>setUserCompDetails(compDetails)
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                setResizableDisplayed: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (displayed)=>{
                        setResizableCssClasses({
                            "HeaderGroupCellComp.useCallback4[setRef2]": (prev)=>prev.setClass("ag-hidden", !displayed)
                        }["HeaderGroupCellComp.useCallback4[setRef2]"]);
                        setResizableAriaHidden(!displayed ? "true" : "false");
                    }
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                setAriaExpanded: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": (expanded)=>setAriaExpanded(expanded)
                }["HeaderGroupCellComp.useCallback4[setRef2]"],
                getUserCompInstance: {
                    "HeaderGroupCellComp.useCallback4[setRef2]": ()=>userCompRef.current || void 0
                }["HeaderGroupCellComp.useCallback4[setRef2]"]
            };
            ctrl.setComp(compProxy, eRef, eResize.current, eHeaderCompWrapper.current, compBean.current);
        }
    }["HeaderGroupCellComp.useCallback4[setRef2]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "HeaderGroupCellComp.useLayoutEffect4": ()=>showJsComp(userCompDetails, context, eHeaderCompWrapper.current)
    }["HeaderGroupCellComp.useLayoutEffect4"], [
        userCompDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderGroupCellComp.useEffect4": ()=>{
            if (eGui.current) {
                ctrl.setDragSource(eGui.current);
            }
        }
    }["HeaderGroupCellComp.useEffect4"], [
        userCompDetails
    ]);
    const userCompStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderGroupCellComp.useMemo4[userCompStateless]": ()=>{
            const res = userCompDetails?.componentFromFramework && isComponentStateless(userCompDetails.componentClass);
            return !!res;
        }
    }["HeaderGroupCellComp.useMemo4[userCompStateless]"], [
        userCompDetails
    ]);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderGroupCellComp.useMemo4[className]": ()=>"ag-header-group-cell " + cssClasses.toString()
    }["HeaderGroupCellComp.useMemo4[className]"], [
        cssClasses
    ]);
    const resizableClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderGroupCellComp.useMemo4[resizableClassName]": ()=>"ag-header-cell-resize " + cssResizableClasses.toString()
    }["HeaderGroupCellComp.useMemo4[resizableClassName]"], [
        cssResizableClasses
    ]);
    const reactUserComp = userCompDetails?.componentFromFramework;
    const UserCompClass = userCompDetails?.componentClass;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        style: userStyles,
        className,
        role: "columnheader",
        "aria-expanded": ariaExpanded
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eHeaderCompWrapper,
        className: "ag-header-cell-comp-wrapper",
        role: "presentation"
    }, reactUserComp ? userCompStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params,
        ref: userCompRef
    }) : null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eResize,
        "aria-hidden": resizableAriaHidden,
        className: resizableClassName
    }));
};
var headerGroupCellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(HeaderGroupCellComp);
// packages/ag-grid-react/src/reactUi/header/headerRowComp.tsx
var HeaderRowComp = ({ ctrl })=>{
    const { gos, context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { topOffset, rowHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderRowComp.useMemo5": ()=>ctrl.getTopAndHeight()
    }["HeaderRowComp.useMemo5"], []);
    const tabIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderRowComp.useMemo5[tabIndex]": ()=>gos.get("tabIndex")
    }["HeaderRowComp.useMemo5[tabIndex]"], []);
    const [ariaRowIndex, setAriaRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderRowComp.useState6": ()=>ctrl.getAriaRowIndex()
    }["HeaderRowComp.useState6"]);
    const className = ctrl.headerRowClass;
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderRowComp.useState6": ()=>rowHeight + "px"
    }["HeaderRowComp.useState6"]);
    const [top, setTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderRowComp.useState6": ()=>topOffset + "px"
    }["HeaderRowComp.useState6"]);
    const cellCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cellCtrls, setCellCtrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HeaderRowComp.useState6": ()=>ctrl.getUpdatedHeaderCtrls()
    }["HeaderRowComp.useState6"]);
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderRowComp.useCallback5[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
                compBean.current = context.destroyBean(compBean.current);
                return;
            }
            compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_EmptyBean"]());
            const compProxy = {
                setHeight: {
                    "HeaderRowComp.useCallback5[setRef2]": (height2)=>setHeight(height2)
                }["HeaderRowComp.useCallback5[setRef2]"],
                setTop: {
                    "HeaderRowComp.useCallback5[setRef2]": (top2)=>setTop(top2)
                }["HeaderRowComp.useCallback5[setRef2]"],
                setHeaderCtrls: {
                    "HeaderRowComp.useCallback5[setRef2]": (ctrls, forceOrder, afterScroll)=>{
                        const prevCellCtrls = cellCtrlsRef.current;
                        const nextCells = getNextValueIfDifferent(prevCellCtrls, ctrls, forceOrder);
                        if (nextCells !== prevCellCtrls) {
                            cellCtrlsRef.current = nextCells;
                            agFlushSync(afterScroll, {
                                "HeaderRowComp.useCallback5[setRef2]": ()=>setCellCtrls(nextCells)
                            }["HeaderRowComp.useCallback5[setRef2]"]);
                        }
                    }
                }["HeaderRowComp.useCallback5[setRef2]"],
                setWidth: {
                    "HeaderRowComp.useCallback5[setRef2]": (width)=>{
                        if (eGui.current) {
                            eGui.current.style.width = width;
                        }
                    }
                }["HeaderRowComp.useCallback5[setRef2]"],
                setRowIndex: {
                    "HeaderRowComp.useCallback5[setRef2]": (rowIndex)=>{
                        setAriaRowIndex(rowIndex);
                    }
                }["HeaderRowComp.useCallback5[setRef2]"]
            };
            ctrl.setComp(compProxy, compBean.current, false);
        }
    }["HeaderRowComp.useCallback5[setRef2]"], []);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderRowComp.useMemo5[style]": ()=>({
                height,
                top
            })
    }["HeaderRowComp.useMemo5[style]"], [
        height,
        top
    ]);
    const createCellJsx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderRowComp.useCallback5[createCellJsx]": (cellCtrl)=>{
            switch(ctrl.type){
                case "group":
                    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerGroupCellComp_default, {
                        ctrl: cellCtrl,
                        key: cellCtrl.instanceId
                    });
                case "filter":
                    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerFilterCellComp_default, {
                        ctrl: cellCtrl,
                        key: cellCtrl.instanceId
                    });
                default:
                    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerCellComp_default, {
                        ctrl: cellCtrl,
                        key: cellCtrl.instanceId
                    });
            }
        }
    }["HeaderRowComp.useCallback5[createCellJsx]"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className,
        role: "row",
        style,
        tabIndex,
        "aria-rowindex": ariaRowIndex
    }, cellCtrls.map(createCellJsx));
};
var headerRowComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(HeaderRowComp);
// packages/ag-grid-react/src/reactUi/header/headerRowContainerComp.tsx
var HeaderRowContainerComp = ({ pinned })=>{
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [headerRowCtrls, setHeaderRowCtrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eCenterContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRowCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const pinnedLeft = pinned === "left";
    const pinnedRight = pinned === "right";
    const centre = !pinnedLeft && !pinnedRight;
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderRowContainerComp.useCallback6[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || context.isDestroyed()) {
                headerRowCtrlRef.current = context.destroyBean(headerRowCtrlRef.current);
                return;
            }
            headerRowCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderRowContainerCtrl"](pinned));
            const compProxy = {
                setDisplayed,
                setCtrls: {
                    "HeaderRowContainerComp.useCallback6[setRef2]": (ctrls)=>setHeaderRowCtrls(ctrls)
                }["HeaderRowContainerComp.useCallback6[setRef2]"],
                // centre only
                setCenterWidth: {
                    "HeaderRowContainerComp.useCallback6[setRef2]": (width)=>{
                        if (eCenterContainer.current) {
                            eCenterContainer.current.style.width = width;
                        }
                    }
                }["HeaderRowContainerComp.useCallback6[setRef2]"],
                setViewportScrollLeft: {
                    "HeaderRowContainerComp.useCallback6[setRef2]": (left)=>{
                        if (eGui.current) {
                            eGui.current.scrollLeft = left;
                        }
                    }
                }["HeaderRowContainerComp.useCallback6[setRef2]"],
                // pinned only
                setPinnedContainerWidth: {
                    "HeaderRowContainerComp.useCallback6[setRef2]": (width)=>{
                        if (eGui.current) {
                            eGui.current.style.width = width;
                            eGui.current.style.minWidth = width;
                            eGui.current.style.maxWidth = width;
                        }
                    }
                }["HeaderRowContainerComp.useCallback6[setRef2]"]
            };
            headerRowCtrlRef.current.setComp(compProxy, eGui.current);
        }
    }["HeaderRowContainerComp.useCallback6[setRef2]"], []);
    const className = !displayed ? "ag-hidden" : "";
    const insertRowsJsx = ()=>headerRowCtrls.map((ctrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerRowComp_default, {
                ctrl,
                key: ctrl.instanceId
            }));
    return pinnedLeft ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: "ag-pinned-left-header " + className,
        "aria-hidden": !displayed,
        role: "rowgroup"
    }, insertRowsJsx()) : pinnedRight ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: "ag-pinned-right-header " + className,
        "aria-hidden": !displayed,
        role: "rowgroup"
    }, insertRowsJsx()) : centre ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: "ag-header-viewport " + className,
        role: "rowgroup",
        tabIndex: -1
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eCenterContainer,
        className: "ag-header-container",
        role: "presentation"
    }, insertRowsJsx())) : null;
};
var headerRowContainerComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(HeaderRowContainerComp);
// packages/ag-grid-react/src/reactUi/header/gridHeaderComp.tsx
var GridHeaderComp = ()=>{
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GridHeaderComp.useState8": ()=>new CssClasses()
    }["GridHeaderComp.useState8"]);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GridHeaderComp.useCallback7[setRef2]": (eRef)=>{
            eGui.current = eRef;
            if (!eRef || context.isDestroyed()) {
                gridCtrlRef.current = context.destroyBean(gridCtrlRef.current);
                return;
            }
            gridCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridHeaderCtrl"]());
            const compProxy = {
                toggleCss: {
                    "GridHeaderComp.useCallback7[setRef2]": (name, on)=>setCssClasses({
                            "GridHeaderComp.useCallback7[setRef2]": (prev)=>prev.setClass(name, on)
                        }["GridHeaderComp.useCallback7[setRef2]"])
                }["GridHeaderComp.useCallback7[setRef2]"],
                setHeightAndMinHeight: {
                    "GridHeaderComp.useCallback7[setRef2]": (height2)=>setHeight(height2)
                }["GridHeaderComp.useCallback7[setRef2]"]
            };
            gridCtrlRef.current.setComp(compProxy, eRef, eRef);
        }
    }["GridHeaderComp.useCallback7[setRef2]"], []);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridHeaderComp.useMemo6[className]": ()=>{
            const res = cssClasses.toString();
            return "ag-header " + res;
        }
    }["GridHeaderComp.useMemo6[className]"], [
        cssClasses
    ]);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridHeaderComp.useMemo6[style]": ()=>({
                height,
                minHeight: height
            })
    }["GridHeaderComp.useMemo6[style]"], [
        height
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className,
        style,
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerRowContainerComp_default, {
        pinned: "left"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerRowContainerComp_default, {
        pinned: null
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(headerRowContainerComp_default, {
        pinned: "right"
    }));
};
var gridHeaderComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(GridHeaderComp);
;
var useReactCommentEffect = (comment, eForCommentRef)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReactCommentEffect.useEffect5": ()=>{
            const eForComment = eForCommentRef.current;
            if (eForComment) {
                const eParent = eForComment.parentElement;
                if (eParent) {
                    const eComment = document.createComment(comment);
                    eParent.insertBefore(eComment, eForComment);
                    return ({
                        "useReactCommentEffect.useEffect5": ()=>{
                            eComment.remove();
                        }
                    })["useReactCommentEffect.useEffect5"];
                }
            }
        }
    }["useReactCommentEffect.useEffect5"], [
        comment
    ]);
};
var reactComment_default = useReactCommentEffect;
;
;
;
;
;
;
;
var CellEditorComponentProxy = class {
    constructor(cellEditorParams, refreshProps){
        this.cellEditorParams = cellEditorParams;
        this.refreshProps = refreshProps;
        this.instanceCreated = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            this.resolveInstanceCreated = resolve;
        });
        this.onValueChange = (value)=>this.updateValue(value);
        this.value = cellEditorParams.value;
    }
    getProps() {
        return {
            ...this.cellEditorParams,
            initialValue: this.cellEditorParams.value,
            value: this.value,
            onValueChange: this.onValueChange
        };
    }
    getValue() {
        return this.value;
    }
    refresh(params) {
        this.cellEditorParams = params;
        this.refreshProps();
    }
    setMethods(methods) {
        addOptionalMethods(this.getOptionalMethods(), methods, this);
    }
    getInstance() {
        return this.instanceCreated.then(()=>this.componentInstance);
    }
    setRef(componentInstance) {
        this.componentInstance = componentInstance;
        this.resolveInstanceCreated?.();
        this.resolveInstanceCreated = void 0;
    }
    getOptionalMethods() {
        return [
            "isCancelBeforeStart",
            "isCancelAfterEnd",
            "focusIn",
            "focusOut",
            "afterGuiAttached",
            "getValidationErrors",
            "getValidationElement"
        ];
    }
    updateValue(value) {
        this.value = value;
        this.refreshProps();
    }
};
;
;
;
;
;
var useEffectOnce = (effect)=>{
    const effectFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(effect);
    const destroyFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const effectCalled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    if (effectCalled.current) {
        rendered.current = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEffectOnce.useEffect6": ()=>{
            if (!effectCalled.current) {
                destroyFn.current = effectFn.current();
                effectCalled.current = true;
            }
            setVal({
                "useEffectOnce.useEffect6": (val)=>val + 1
            }["useEffectOnce.useEffect6"]);
            return ({
                "useEffectOnce.useEffect6": ()=>{
                    if (!rendered.current) {
                        return;
                    }
                    destroyFn.current?.();
                }
            })["useEffectOnce.useEffect6"];
        }
    }["useEffectOnce.useEffect6"], []);
};
// packages/ag-grid-react/src/reactUi/cells/popupEditorComp.tsx
var PopupEditorComp = (props)=>{
    const [popupEditorWrapper, setPopupEditorWrapper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { context, popupSvc, gos, editSvc } = beans;
    const { editDetails, cellCtrl, eParentCell } = props;
    useEffectOnce({
        "PopupEditorComp.useEffectOnce": ()=>{
            const { compDetails } = editDetails;
            const useModelPopup = gos.get("stopEditingWhenCellsLoseFocus");
            let hideEditorPopup = void 0;
            let wrapper;
            if (!context.isDestroyed()) {
                wrapper = context.createBean(editSvc.createPopupEditorWrapper(compDetails.params));
                const ePopupGui = wrapper.getGui();
                if (props.jsChildComp) {
                    const eChildGui = props.jsChildComp.getGui();
                    if (eChildGui) {
                        ePopupGui.appendChild(eChildGui);
                    }
                }
                const { column, rowNode } = cellCtrl;
                const positionParams = {
                    column,
                    rowNode,
                    type: "popupCellEditor",
                    eventSource: eParentCell,
                    ePopup: ePopupGui,
                    position: editDetails.popupPosition,
                    keepWithinBounds: true
                };
                const positionCallback = popupSvc?.positionPopupByComponent.bind(popupSvc, positionParams);
                const addPopupRes = popupSvc?.addPopup({
                    modal: useModelPopup,
                    eChild: ePopupGui,
                    closeOnEsc: true,
                    closedCallback: {
                        "PopupEditorComp.useEffectOnce": ()=>{
                            cellCtrl.onPopupEditorClosed();
                        }
                    }["PopupEditorComp.useEffectOnce"],
                    anchorToElement: eParentCell,
                    positionCallback,
                    ariaOwns: eParentCell
                });
                hideEditorPopup = addPopupRes ? addPopupRes.hideFunc : void 0;
                setPopupEditorWrapper(wrapper);
                props.jsChildComp?.afterGuiAttached?.();
            }
            return ({
                "PopupEditorComp.useEffectOnce": ()=>{
                    hideEditorPopup?.();
                    context.destroyBean(wrapper);
                }
            })["PopupEditorComp.useEffectOnce"];
        }
    }["PopupEditorComp.useEffectOnce"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopupEditorComp.useLayoutEffect5": ()=>{
            return ({
                "PopupEditorComp.useLayoutEffect5": ()=>{
                    if (cellCtrl.isCellFocused() && popupEditorWrapper?.getGui().contains((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getActiveDomElement"])(beans))) {
                        eParentCell.focus({
                            preventScroll: true
                        });
                    }
                }
            })["PopupEditorComp.useLayoutEffect5"];
        }
    }["PopupEditorComp.useLayoutEffect5"], [
        popupEditorWrapper
    ]);
    return popupEditorWrapper && props.wrappedContent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(props.wrappedContent, popupEditorWrapper.getGui()) : null;
};
var popupEditorComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(PopupEditorComp);
// packages/ag-grid-react/src/reactUi/cells/cellEditorComp.tsx
var jsxEditorProxy = (editDetails, CellEditorClass, setRef2)=>{
    const { compProxy } = editDetails;
    setRef2(compProxy);
    const props = compProxy.getProps();
    const isStateless = isComponentStateless(CellEditorClass);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomContext.Provider, {
        value: {
            setMethods: (methods)=>compProxy.setMethods(methods)
        }
    }, isStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellEditorClass, {
        ...props
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellEditorClass, {
        ...props,
        ref: (ref)=>compProxy.setRef(ref)
    }));
};
var jsxEditor = (editDetails, CellEditorClass, setRef2)=>{
    const newFormat = editDetails.compProxy;
    return newFormat ? jsxEditorProxy(editDetails, CellEditorClass, setRef2) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellEditorClass, {
        ...editDetails.compDetails.params,
        ref: setRef2
    });
};
var jsxEditValue = (editDetails, setCellEditorRef, eGui, cellCtrl, jsEditorComp)=>{
    const compDetails = editDetails.compDetails;
    const CellEditorClass = compDetails.componentClass;
    const reactInlineEditor = compDetails.componentFromFramework && !editDetails.popup;
    const reactPopupEditor = compDetails.componentFromFramework && editDetails.popup;
    const jsPopupEditor = !compDetails.componentFromFramework && editDetails.popup;
    return reactInlineEditor ? jsxEditor(editDetails, CellEditorClass, setCellEditorRef) : reactPopupEditor ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(popupEditorComp_default, {
        editDetails,
        cellCtrl,
        eParentCell: eGui,
        wrappedContent: jsxEditor(editDetails, CellEditorClass, setCellEditorRef)
    }) : jsPopupEditor && jsEditorComp ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(popupEditorComp_default, {
        editDetails,
        cellCtrl,
        eParentCell: eGui,
        jsChildComp: jsEditorComp
    }) : null;
};
;
var useJsCellRenderer = (showDetails, showTools, eCellValue, cellValueVersion, jsCellRendererRef, eGui, suppressInlineEditRenderer = false)=>{
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const destroyCellRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useJsCellRenderer.useCallback8[destroyCellRenderer]": ()=>{
            const comp = jsCellRendererRef.current;
            if (!comp) {
                return;
            }
            const compGui = comp.getGui();
            if (compGui && compGui.parentElement) {
                compGui.remove();
            }
            context.destroyBean(comp);
            jsCellRendererRef.current = void 0;
        }
    }["useJsCellRenderer.useCallback8[destroyCellRenderer]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useJsCellRenderer.useEffect7": ()=>{
            const showValue = showDetails != null && !suppressInlineEditRenderer;
            const jsCompDetails = showDetails?.compDetails && !showDetails.compDetails.componentFromFramework;
            const waitingForToolsSetup = showTools && eCellValue == null;
            const showComp = showValue && jsCompDetails && !waitingForToolsSetup;
            if (!showComp) {
                destroyCellRenderer();
                return;
            }
            const compDetails = showDetails.compDetails;
            if (jsCellRendererRef.current) {
                const comp = jsCellRendererRef.current;
                const attemptRefresh = comp.refresh != null && showDetails.force == false;
                const refreshResult = attemptRefresh ? comp.refresh(compDetails.params) : false;
                const refreshWorked = refreshResult === true || refreshResult === void 0;
                if (refreshWorked) {
                    return;
                }
                destroyCellRenderer();
            }
            const promise = compDetails.newAgStackInstance();
            promise.then({
                "useJsCellRenderer.useEffect7": (comp)=>{
                    if (!comp) {
                        return;
                    }
                    const compGui = comp.getGui();
                    if (!compGui) {
                        return;
                    }
                    const parent = showTools ? eCellValue : eGui.current;
                    parent.appendChild(compGui);
                    jsCellRendererRef.current = comp;
                }
            }["useJsCellRenderer.useEffect7"]);
        }
    }["useJsCellRenderer.useEffect7"], [
        showDetails,
        showTools,
        cellValueVersion,
        suppressInlineEditRenderer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useJsCellRenderer.useEffect7": ()=>{
            return destroyCellRenderer;
        }
    }["useJsCellRenderer.useEffect7"], []);
};
var showJsRenderer_default = useJsCellRenderer;
;
var SkeletonCellRenderer = ({ cellCtrl, parent })=>{
    const jsCellRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const renderDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SkeletonCellRenderer.useMemo7[renderDetails]": ()=>{
            const { loadingComp } = cellCtrl.getDeferLoadingCellRenderer();
            return loadingComp ? {
                value: void 0,
                compDetails: loadingComp,
                force: false
            } : void 0;
        }
    }["SkeletonCellRenderer.useMemo7[renderDetails]"], [
        cellCtrl
    ]);
    showJsRenderer_default(renderDetails, false, void 0, 1, jsCellRendererRef, parent);
    if (renderDetails?.compDetails?.componentFromFramework) {
        const CellRendererClass = renderDetails.compDetails.componentClass;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellRendererClass, {
            ...renderDetails.compDetails.params
        });
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null);
};
// packages/ag-grid-react/src/reactUi/cells/cellComp.tsx
var CellComp = ({ cellCtrl, printLayout, editingCell })=>{
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { context } = beans;
    const { column: { colIdSanitised }, instanceId } = cellCtrl;
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [renderDetails, setRenderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CellComp.useState11": ()=>cellCtrl.isCellRenderer() ? void 0 : {
                compDetails: void 0,
                value: cellCtrl.getValueToDisplay(),
                force: false
            }
    }["CellComp.useState11"]);
    const [editDetails, setEditDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [renderKey, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [includeSelection, setIncludeSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includeRowDrag, setIncludeRowDrag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includeDndSource, setIncludeDndSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [jsEditorComp, setJsEditorComp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const forceWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CellComp.useMemo8[forceWrapper]": ()=>cellCtrl.isForceWrapper()
    }["CellComp.useMemo8[forceWrapper]"], [
        cellCtrl
    ]);
    const cellAriaRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CellComp.useMemo8[cellAriaRole]": ()=>cellCtrl.getCellAriaRole()
    }["CellComp.useMemo8[cellAriaRole]"], [
        cellCtrl
    ]);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cellRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const jsCellRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const cellEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eCellWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const cellWrapperDestroyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rowDragCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eCellValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [cellValueVersion, setCellValueVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const setCellValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CellComp.useCallback9[setCellValueRef]": (ref)=>{
            eCellValue.current = ref;
            setCellValueVersion({
                "CellComp.useCallback9[setCellValueRef]": (v)=>v + 1
            }["CellComp.useCallback9[setCellValueRef]"]);
        }
    }["CellComp.useCallback9[setCellValueRef]"], []);
    const showTools = renderDetails != null && (includeSelection || includeDndSource || includeRowDrag) && (editDetails == null || !!editDetails.popup);
    const showCellWrapper = forceWrapper || showTools;
    const cellValueClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CellComp.useMemo8[cellValueClass]": ()=>{
            return cellCtrl.getCellValueClass();
        }
    }["CellComp.useMemo8[cellValueClass]"], [
        cellCtrl
    ]);
    const setCellEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CellComp.useCallback9[setCellEditorRef]": (cellEditor)=>{
            cellEditorRef.current = cellEditor;
            if (cellEditor) {
                const editingCancelledByUserComp = cellEditor.isCancelBeforeStart && cellEditor.isCancelBeforeStart();
                setTimeout({
                    "CellComp.useCallback9[setCellEditorRef]": ()=>{
                        if (editingCancelledByUserComp) {
                            cellCtrl.stopEditing(true);
                            cellCtrl.focusCell(true);
                        } else {
                            cellCtrl.cellEditorAttached();
                            cellCtrl.enableEditorTooltipFeature(cellEditor);
                        }
                    }
                }["CellComp.useCallback9[setCellEditorRef]"]);
            }
        }
    }["CellComp.useCallback9[setCellEditorRef]"], [
        cellCtrl
    ]);
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (!cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eGui.current);
    }
    const suppressJsRenderer = !!editDetails && !editDetails.popup;
    showJsRenderer_default(renderDetails, showCellWrapper, eCellValue.current, cellValueVersion, jsCellRendererRef, eGui, suppressJsRenderer);
    const lastRenderDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CellComp.useLayoutEffect6": ()=>{
            const oldDetails = lastRenderDetails.current;
            const newDetails = renderDetails;
            lastRenderDetails.current = renderDetails;
            if (oldDetails == null || oldDetails.compDetails == null || newDetails == null || newDetails.compDetails == null) {
                return;
            }
            rowDragCompRef.current?.refreshVisibility();
            const oldCompDetails = oldDetails.compDetails;
            const newCompDetails = newDetails.compDetails;
            if (oldCompDetails.componentClass != newCompDetails.componentClass) {
                return;
            }
            if (cellRendererRef.current?.refresh == null) {
                return;
            }
            const result = cellRendererRef.current.refresh(newCompDetails.params);
            if (result != true) {
                setRenderKey({
                    "CellComp.useLayoutEffect6": (prev)=>prev + 1
                }["CellComp.useLayoutEffect6"]);
            }
        }
    }["CellComp.useLayoutEffect6"], [
        renderDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CellComp.useLayoutEffect6": ()=>{
            const doingJsEditor = editDetails && !editDetails.compDetails.componentFromFramework;
            if (!doingJsEditor || context.isDestroyed()) {
                return;
            }
            const compDetails = editDetails.compDetails;
            const isPopup = editDetails.popup === true;
            const cellEditorPromise = compDetails.newAgStackInstance();
            cellEditorPromise.then({
                "CellComp.useLayoutEffect6": (cellEditor)=>{
                    if (!cellEditor) {
                        return;
                    }
                    const compGui = cellEditor.getGui();
                    setCellEditorRef(cellEditor);
                    if (!isPopup) {
                        const parentEl = (forceWrapper ? eCellWrapper : eGui).current;
                        parentEl?.appendChild(compGui);
                        cellEditor.afterGuiAttached?.();
                    }
                    setJsEditorComp(cellEditor);
                }
            }["CellComp.useLayoutEffect6"]);
            return ({
                "CellComp.useLayoutEffect6": ()=>{
                    cellEditorPromise.then({
                        "CellComp.useLayoutEffect6": (cellEditor)=>{
                            const compGui = cellEditor.getGui();
                            cellCtrl.disableEditorTooltipFeature();
                            context.destroyBean(cellEditor);
                            setCellEditorRef(void 0);
                            setJsEditorComp(void 0);
                            compGui?.remove();
                        }
                    }["CellComp.useLayoutEffect6"]);
                }
            })["CellComp.useLayoutEffect6"];
        }
    }["CellComp.useLayoutEffect6"], [
        editDetails
    ]);
    const setCellWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CellComp.useCallback9[setCellWrapperRef]": (eRef)=>{
            eCellWrapper.current = eRef;
            if (!eRef || context.isDestroyed() || !cellCtrl.isAlive()) {
                const callbacks = cellWrapperDestroyFuncs.current;
                cellWrapperDestroyFuncs.current = [];
                for (const cb of callbacks){
                    cb();
                }
                return;
            }
            let rowDragComp;
            const addComp = {
                "CellComp.useCallback9[setCellWrapperRef].addComp": (comp)=>{
                    if (comp) {
                        eRef.insertAdjacentElement("afterbegin", comp.getGui());
                        cellWrapperDestroyFuncs.current.push({
                            "CellComp.useCallback9[setCellWrapperRef].addComp": ()=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_removeFromParent"])(comp.getGui());
                                context.destroyBean(comp);
                                if (rowDragCompRef.current === rowDragComp) {
                                    rowDragCompRef.current = void 0;
                                }
                            }
                        }["CellComp.useCallback9[setCellWrapperRef].addComp"]);
                    }
                }
            }["CellComp.useCallback9[setCellWrapperRef].addComp"];
            if (includeSelection) {
                addComp(cellCtrl.createSelectionCheckbox());
            }
            if (includeDndSource) {
                addComp(cellCtrl.createDndSource());
            }
            if (includeRowDrag) {
                rowDragComp = cellCtrl.createRowDragComp();
                rowDragCompRef.current = rowDragComp;
                if (rowDragComp) {
                    addComp(rowDragComp);
                    rowDragComp.refreshVisibility();
                }
            }
        }
    }["CellComp.useCallback9[setCellWrapperRef]"], [
        cellCtrl,
        context,
        includeDndSource,
        includeRowDrag,
        includeSelection
    ]);
    const init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CellComp.useCallback9[init]": ()=>{
            const spanReady = !cellCtrl.isCellSpanning() || eWrapper.current;
            const eRef = eGui.current;
            if (!eRef || !spanReady || !cellCtrl || !cellCtrl.isAlive() || context.isDestroyed()) {
                compBean.current = context.destroyBean(compBean.current);
                return;
            }
            compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_EmptyBean"]());
            const compProxy = {
                toggleCss: {
                    "CellComp.useCallback9[init]": (name, on)=>cssManager.current.toggleCss(name, on)
                }["CellComp.useCallback9[init]"],
                setUserStyles: {
                    "CellComp.useCallback9[init]": (styles)=>setUserStyles(styles)
                }["CellComp.useCallback9[init]"],
                getFocusableElement: {
                    "CellComp.useCallback9[init]": ()=>eGui.current
                }["CellComp.useCallback9[init]"],
                setIncludeSelection: {
                    "CellComp.useCallback9[init]": (include)=>setIncludeSelection(include)
                }["CellComp.useCallback9[init]"],
                setIncludeRowDrag: {
                    "CellComp.useCallback9[init]": (include)=>setIncludeRowDrag(include)
                }["CellComp.useCallback9[init]"],
                setIncludeDndSource: {
                    "CellComp.useCallback9[init]": (include)=>setIncludeDndSource(include)
                }["CellComp.useCallback9[init]"],
                getCellEditor: {
                    "CellComp.useCallback9[init]": ()=>cellEditorRef.current ?? null
                }["CellComp.useCallback9[init]"],
                getCellRenderer: {
                    "CellComp.useCallback9[init]": ()=>cellRendererRef.current ?? jsCellRendererRef.current
                }["CellComp.useCallback9[init]"],
                getParentOfValue: {
                    "CellComp.useCallback9[init]": ()=>eCellValue.current ?? eCellWrapper.current ?? eGui.current
                }["CellComp.useCallback9[init]"],
                setRenderDetails: {
                    "CellComp.useCallback9[init]": (compDetails, value, force)=>{
                        const setDetails = {
                            "CellComp.useCallback9[init].setDetails": ()=>{
                                setRenderDetails({
                                    "CellComp.useCallback9[init].setDetails": (prev)=>{
                                        if (prev?.compDetails !== compDetails || prev?.value !== value || prev?.force !== force) {
                                            return {
                                                value,
                                                compDetails,
                                                force
                                            };
                                        } else {
                                            return prev;
                                        }
                                    }
                                }["CellComp.useCallback9[init].setDetails"]);
                            }
                        }["CellComp.useCallback9[init].setDetails"];
                        if (compDetails?.params?.deferRender && !cellCtrl.rowNode.group) {
                            const { loadingComp, onReady } = cellCtrl.getDeferLoadingCellRenderer();
                            if (loadingComp) {
                                setRenderDetails({
                                    value: void 0,
                                    compDetails: loadingComp,
                                    force: false
                                });
                                onReady.then({
                                    "CellComp.useCallback9[init]": ()=>agStartTransition(setDetails)
                                }["CellComp.useCallback9[init]"]);
                                return;
                            }
                        }
                        setDetails();
                    }
                }["CellComp.useCallback9[init]"],
                setEditDetails: {
                    "CellComp.useCallback9[init]": (compDetails, popup, popupPosition, reactiveCustomComponents)=>{
                        if (compDetails) {
                            let compProxy2 = void 0;
                            if (compDetails.componentFromFramework) {
                                if (reactiveCustomComponents) {
                                    compProxy2 = new CellEditorComponentProxy(compDetails.params, {
                                        "CellComp.useCallback9[init]": ()=>setRenderKey({
                                                "CellComp.useCallback9[init]": (prev)=>prev + 1
                                            }["CellComp.useCallback9[init]"])
                                    }["CellComp.useCallback9[init]"]);
                                } else {
                                    warnReactiveCustomComponents();
                                }
                            }
                            setEditDetails({
                                compDetails,
                                popup,
                                popupPosition,
                                compProxy: compProxy2
                            });
                            if (!popup) {
                                setRenderDetails(void 0);
                            }
                        } else {
                            const recoverFocus = cellCtrl.hasBrowserFocus();
                            if (recoverFocus) {
                                compProxy.getFocusableElement().focus({
                                    preventScroll: true
                                });
                            }
                            cellEditorRef.current = void 0;
                            setEditDetails(void 0);
                        }
                    }
                }["CellComp.useCallback9[init]"],
                refreshEditStyles: {
                    "CellComp.useCallback9[init]": (editing, isPopup)=>{
                        if (!eGui.current) {
                            return;
                        }
                        const { current } = cssManager;
                        current.toggleCss("ag-cell-value", !showCellWrapper);
                        current.toggleCss("ag-cell-inline-editing", !!editing && !isPopup);
                        current.toggleCss("ag-cell-popup-editing", !!editing && !!isPopup);
                        current.toggleCss("ag-cell-not-inline-editing", !editing || !!isPopup);
                    }
                }["CellComp.useCallback9[init]"]
            };
            const cellWrapperOrUndefined = eCellWrapper.current || void 0;
            cellCtrl.setComp(compProxy, eRef, eWrapper.current ?? void 0, cellWrapperOrUndefined, printLayout, editingCell, compBean.current);
        }
    }["CellComp.useCallback9[init]"], []);
    const setGuiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CellComp.useCallback9[setGuiRef]": (ref)=>{
            eGui.current = ref;
            init();
        }
    }["CellComp.useCallback9[setGuiRef]"], []);
    const setWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CellComp.useCallback9[setWrapperRef]": (ref)=>{
            eWrapper.current = ref;
            init();
        }
    }["CellComp.useCallback9[setWrapperRef]"], []);
    const reactCellRendererStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CellComp.useMemo8[reactCellRendererStateless]": ()=>{
            const res = renderDetails?.compDetails?.componentFromFramework && isComponentStateless(renderDetails.compDetails.componentClass);
            return !!res;
        }
    }["CellComp.useMemo8[reactCellRendererStateless]"], [
        renderDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CellComp.useLayoutEffect6": ()=>{
            if (!eGui.current) {
                return;
            }
            const { current } = cssManager;
            current.toggleCss("ag-cell-value", !showCellWrapper);
            current.toggleCss("ag-cell-inline-editing", !!editDetails && !editDetails.popup);
            current.toggleCss("ag-cell-popup-editing", !!editDetails && !!editDetails.popup);
            current.toggleCss("ag-cell-not-inline-editing", !editDetails || !!editDetails.popup);
        }
    }["CellComp.useLayoutEffect6"]);
    const valueOrCellComp = ()=>{
        const { compDetails, value } = renderDetails;
        if (!compDetails) {
            return value?.toString?.() ?? value;
        }
        if (compDetails.componentFromFramework) {
            const CellRendererClass = compDetails.componentClass;
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SkeletonCellRenderer, {
                    cellCtrl,
                    parent: eGui
                })
            }, reactCellRendererStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellRendererClass, {
                ...compDetails.params,
                key: renderKey
            }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CellRendererClass, {
                ...compDetails.params,
                key: renderKey,
                ref: cellRendererRef
            }));
        }
    };
    const showCellOrEditor = ()=>{
        const showCellValue = ()=>{
            if (renderDetails == null) {
                return null;
            }
            return showCellWrapper ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                role: "presentation",
                id: `cell-${instanceId}`,
                className: cellValueClass,
                ref: setCellValueRef
            }, valueOrCellComp()) : valueOrCellComp();
        };
        const showEditValue = (details)=>jsxEditValue(details, setCellEditorRef, eGui.current, cellCtrl, jsEditorComp);
        if (editDetails != null) {
            if (editDetails.popup) {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, showCellValue(), showEditValue(editDetails));
            }
            return showEditValue(editDetails);
        }
        return showCellValue();
    };
    const renderCell = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: setGuiRef,
            style: userStyles,
            role: cellAriaRole,
            "col-id": colIdSanitised
        }, showCellWrapper ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ag-cell-wrapper",
            role: "presentation",
            ref: setCellWrapperRef
        }, showCellOrEditor()) : showCellOrEditor());
    if (cellCtrl.isCellSpanning()) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: setWrapperRef,
            className: "ag-spanned-cell-wrapper",
            role: "presentation"
        }, renderCell());
    }
    return renderCell();
};
var cellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(CellComp);
// packages/ag-grid-react/src/reactUi/rows/rowComp.tsx
var RowComp = ({ rowCtrl, containerType })=>{
    const { context, gos, editSvc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const enableUses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(RenderModeContext) === "default";
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const domOrderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(rowCtrl.getDomOrder());
    const isFullWidth = rowCtrl.isFullWidth();
    const isDisplayed = rowCtrl.rowNode.displayed;
    const [rowIndex, setRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>isDisplayed ? rowCtrl.rowNode.getRowIndexString() : null
    }["RowComp.useState12"]);
    const [rowId, setRowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>rowCtrl.rowId
    }["RowComp.useState12"]);
    const [rowBusinessKey, setRowBusinessKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>rowCtrl.businessKey
    }["RowComp.useState12"]);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>rowCtrl.rowStyles
    }["RowComp.useState12"]);
    const cellCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cellCtrlsFlushSync, setCellCtrlsFlushSync] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>null
    }["RowComp.useState12"]);
    const [fullWidthCompDetails, setFullWidthCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [top, setTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>isDisplayed ? rowCtrl.getInitialRowTop(containerType) : void 0
    }["RowComp.useState12"]);
    const [transform, setTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowComp.useState12": ()=>isDisplayed ? rowCtrl.getInitialTransform(containerType) : void 0
    }["RowComp.useState12"]);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fullWidthCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const fullWidthParamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const autoHeightSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [autoHeightSetupAttempt, setAutoHeightSetupAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RowComp.useEffect8": ()=>{
            if (autoHeightSetup.current || !fullWidthCompDetails || autoHeightSetupAttempt > 10) {
                return;
            }
            const eChild = eGui.current?.firstChild;
            if (eChild) {
                rowCtrl.setupDetailRowAutoHeight(eChild);
                autoHeightSetup.current = true;
            } else {
                setAutoHeightSetupAttempt({
                    "RowComp.useEffect8": (prev)=>prev + 1
                }["RowComp.useEffect8"]);
            }
        }
    }["RowComp.useEffect8"], [
        fullWidthCompDetails,
        autoHeightSetupAttempt
    ]);
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (!cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eGui.current);
    }
    const cellsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "RowComp.useRef11[cellsChanged]": ()=>{}
    }["RowComp.useRef11[cellsChanged]"]);
    const sub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowComp.useCallback10[sub]": (onStoreChange)=>{
            cellsChanged.current = onStoreChange;
            return ({
                "RowComp.useCallback10[sub]": ()=>{
                    cellsChanged.current = ({
                        "RowComp.useCallback10[sub]": ()=>{}
                    })["RowComp.useCallback10[sub]"];
                }
            })["RowComp.useCallback10[sub]"];
        }
    }["RowComp.useCallback10[sub]"], []);
    const cellCtrlsUses = agUseSyncExternalStore(sub, ()=>{
        return cellCtrlsRef.current;
    }, []);
    const cellCtrlsMerged = enableUses ? cellCtrlsUses : cellCtrlsFlushSync;
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowComp.useCallback10[setRef2]": (eRef)=>{
            eGui.current = eRef;
            compBean.current = eRef ? context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_EmptyBean"]()) : context.destroyBean(compBean.current);
            if (!eRef) {
                rowCtrl.unsetComp(containerType);
                return;
            }
            if (!rowCtrl.isAlive() || context.isDestroyed()) {
                return;
            }
            const compProxy = {
                // the rowTop is managed by state, instead of direct style manipulation by rowCtrl (like all the other styles)
                // as we need to have an initial value when it's placed into he DOM for the first time, for animation to work.
                setTop,
                setTransform,
                // i found using React for managing classes at the row level was to slow, as modifying classes caused a lot of
                // React code to execute, so avoiding React for managing CSS Classes made the grid go much faster.
                toggleCss: {
                    "RowComp.useCallback10[setRef2]": (name, on)=>cssManager.current.toggleCss(name, on)
                }["RowComp.useCallback10[setRef2]"],
                setDomOrder: {
                    "RowComp.useCallback10[setRef2]": (domOrder)=>domOrderRef.current = domOrder
                }["RowComp.useCallback10[setRef2]"],
                setRowIndex,
                setRowId,
                setRowBusinessKey,
                setUserStyles,
                // if we don't maintain the order, then cols will be ripped out and into the dom
                // when cols reordered, which would stop the CSS transitions from working
                setCellCtrls: {
                    "RowComp.useCallback10[setRef2]": (next, useFlushSync)=>{
                        const prevCellCtrls = cellCtrlsRef.current;
                        const nextCells = getNextValueIfDifferent(prevCellCtrls, next, domOrderRef.current);
                        if (nextCells !== prevCellCtrls) {
                            cellCtrlsRef.current = nextCells;
                            if (enableUses) {
                                cellsChanged.current();
                            } else {
                                agFlushSync(useFlushSync, {
                                    "RowComp.useCallback10[setRef2]": ()=>setCellCtrlsFlushSync(nextCells)
                                }["RowComp.useCallback10[setRef2]"]);
                            }
                        }
                    }
                }["RowComp.useCallback10[setRef2]"],
                showFullWidth: {
                    "RowComp.useCallback10[setRef2]": (compDetails)=>{
                        fullWidthParamsRef.current = compDetails.params;
                        setFullWidthCompDetails(compDetails);
                    }
                }["RowComp.useCallback10[setRef2]"],
                getFullWidthCellRenderer: {
                    "RowComp.useCallback10[setRef2]": ()=>fullWidthCompRef.current
                }["RowComp.useCallback10[setRef2]"],
                getFullWidthCellRendererParams: {
                    "RowComp.useCallback10[setRef2]": ()=>fullWidthParamsRef.current
                }["RowComp.useCallback10[setRef2]"],
                refreshFullWidth: {
                    "RowComp.useCallback10[setRef2]": (getUpdatedParams)=>{
                        const fullWidthParams = getUpdatedParams();
                        fullWidthParamsRef.current = fullWidthParams;
                        if (canRefreshFullWidthRef.current) {
                            setFullWidthCompDetails({
                                "RowComp.useCallback10[setRef2]": (prevFullWidthCompDetails)=>({
                                        ...prevFullWidthCompDetails,
                                        params: fullWidthParams
                                    })
                            }["RowComp.useCallback10[setRef2]"]);
                            return true;
                        } else {
                            if (!fullWidthCompRef.current || !fullWidthCompRef.current.refresh) {
                                return false;
                            }
                            return fullWidthCompRef.current.refresh(fullWidthParams);
                        }
                    }
                }["RowComp.useCallback10[setRef2]"]
            };
            rowCtrl.setComp(compProxy, eRef, containerType, compBean.current);
        }
    }["RowComp.useCallback10[setRef2]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "RowComp.useLayoutEffect7": ()=>showJsComp(fullWidthCompDetails, context, eGui.current, fullWidthCompRef)
    }["RowComp.useLayoutEffect7"], [
        fullWidthCompDetails
    ]);
    const rowStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RowComp.useMemo9[rowStyles]": ()=>{
            const res = {
                top,
                transform
            };
            Object.assign(res, userStyles);
            return res;
        }
    }["RowComp.useMemo9[rowStyles]"], [
        top,
        transform,
        userStyles
    ]);
    const showFullWidthFramework = isFullWidth && fullWidthCompDetails?.componentFromFramework;
    const showCells = !isFullWidth && cellCtrlsMerged != null;
    const reactFullWidthCellRendererStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RowComp.useMemo9[reactFullWidthCellRendererStateless]": ()=>{
            const res = fullWidthCompDetails?.componentFromFramework && isComponentStateless(fullWidthCompDetails.componentClass);
            return !!res;
        }
    }["RowComp.useMemo9[reactFullWidthCellRendererStateless]"], [
        fullWidthCompDetails
    ]);
    const canRefreshFullWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RowComp.useEffect8": ()=>{
            canRefreshFullWidthRef.current = reactFullWidthCellRendererStateless && !!fullWidthCompDetails && !!gos.get("reactiveCustomComponents");
        }
    }["RowComp.useEffect8"], [
        reactFullWidthCellRendererStateless,
        fullWidthCompDetails
    ]);
    const showCellsJsx = ()=>cellCtrlsMerged?.map((cellCtrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(cellComp_default, {
                cellCtrl,
                editingCell: editSvc?.isEditing(cellCtrl, {
                    withOpenEditor: true
                }) ?? false,
                printLayout: rowCtrl.printLayout,
                key: cellCtrl.instanceId
            }));
    const showFullWidthFrameworkJsx = ()=>{
        const FullWidthComp = fullWidthCompDetails.componentClass;
        return reactFullWidthCellRendererStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FullWidthComp, {
            ...fullWidthCompDetails.params
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(FullWidthComp, {
            ...fullWidthCompDetails.params,
            ref: fullWidthCompRef
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        role: "row",
        style: rowStyles,
        "row-index": rowIndex,
        "row-id": rowId,
        "row-business-key": rowBusinessKey
    }, showCells ? showCellsJsx() : showFullWidthFramework ? showFullWidthFrameworkJsx() : null);
};
var rowComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(RowComp);
// packages/ag-grid-react/src/reactUi/rows/rowContainerComp.tsx
var RowContainerComp = ({ name })=>{
    const { context, gos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const containerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RowContainerComp.useMemo10[containerOptions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getRowContainerOptions"])(name)
    }["RowContainerComp.useMemo10[containerOptions]"], [
        name
    ]);
    const eViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eSpanContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevRowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [rowCtrlsOrdered, setRowCtrlsOrdered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowContainerComp.useState13": ()=>[]
    }["RowContainerComp.useState13"]);
    const isSpanning = !!gos.get("enableCellSpan") && !!containerOptions.getSpannedRowCtrls;
    const spannedRowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevSpannedRowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [spannedRowCtrlsOrdered, setSpannedRowCtrlsOrdered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RowContainerComp.useState13": ()=>[]
    }["RowContainerComp.useState13"]);
    const domOrderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rowContainerCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const viewportClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RowContainerComp.useMemo10[viewportClasses]": ()=>classesList("ag-viewport", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getRowViewportClass"])(name))
    }["RowContainerComp.useMemo10[viewportClasses]"], [
        name
    ]);
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RowContainerComp.useMemo10[containerClasses]": ()=>classesList((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getRowContainerClass"])(name))
    }["RowContainerComp.useMemo10[containerClasses]"], [
        name
    ]);
    const spanClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RowContainerComp.useMemo10[spanClasses]": ()=>classesList("ag-spanning-container", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getRowSpanContainerClass"])(name))
    }["RowContainerComp.useMemo10[spanClasses]"], [
        name
    ]);
    const shouldRenderViewport = containerOptions.type === "center" || isSpanning;
    const topLevelRef = shouldRenderViewport ? eViewport : eContainer;
    reactComment_default(" AG Row Container " + name + " ", topLevelRef);
    const areElementsReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowContainerComp.useCallback11[areElementsReady]": ()=>{
            const viewportReady = !shouldRenderViewport || eViewport.current != null;
            const containerReady = eContainer.current != null;
            const spanContainerReady = !isSpanning || eSpanContainer.current != null;
            return viewportReady && containerReady && spanContainerReady;
        }
    }["RowContainerComp.useCallback11[areElementsReady]"], []);
    const areElementsRemoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowContainerComp.useCallback11[areElementsRemoved]": ()=>{
            return eViewport.current == null && eContainer.current == null && eSpanContainer.current == null;
        }
    }["RowContainerComp.useCallback11[areElementsRemoved]"], []);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowContainerComp.useCallback11[setRef2]": ()=>{
            if (areElementsRemoved()) {
                rowContainerCtrlRef.current = context.destroyBean(rowContainerCtrlRef.current);
            }
            if (context.isDestroyed()) {
                return;
            }
            if (areElementsReady()) {
                const updateRowCtrlsOrdered = {
                    "RowContainerComp.useCallback11[setRef2].updateRowCtrlsOrdered": (useFlushSync)=>{
                        const next = getNextValueIfDifferent(prevRowCtrlsRef.current, rowCtrlsRef.current, domOrderRef.current);
                        if (next !== prevRowCtrlsRef.current) {
                            prevRowCtrlsRef.current = next;
                            agFlushSync(useFlushSync, {
                                "RowContainerComp.useCallback11[setRef2].updateRowCtrlsOrdered": ()=>setRowCtrlsOrdered(next)
                            }["RowContainerComp.useCallback11[setRef2].updateRowCtrlsOrdered"]);
                        }
                    }
                }["RowContainerComp.useCallback11[setRef2].updateRowCtrlsOrdered"];
                const updateSpannedRowCtrlsOrdered = {
                    "RowContainerComp.useCallback11[setRef2].updateSpannedRowCtrlsOrdered": (useFlushSync)=>{
                        const next = getNextValueIfDifferent(prevSpannedRowCtrlsRef.current, spannedRowCtrlsRef.current, domOrderRef.current);
                        if (next !== prevSpannedRowCtrlsRef.current) {
                            prevSpannedRowCtrlsRef.current = next;
                            agFlushSync(useFlushSync, {
                                "RowContainerComp.useCallback11[setRef2].updateSpannedRowCtrlsOrdered": ()=>setSpannedRowCtrlsOrdered(next)
                            }["RowContainerComp.useCallback11[setRef2].updateSpannedRowCtrlsOrdered"]);
                        }
                    }
                }["RowContainerComp.useCallback11[setRef2].updateSpannedRowCtrlsOrdered"];
                const compProxy = {
                    setHorizontalScroll: {
                        "RowContainerComp.useCallback11[setRef2]": (offset)=>{
                            if (eViewport.current) {
                                eViewport.current.scrollLeft = offset;
                            }
                        }
                    }["RowContainerComp.useCallback11[setRef2]"],
                    setViewportHeight: {
                        "RowContainerComp.useCallback11[setRef2]": (height)=>{
                            if (eViewport.current) {
                                eViewport.current.style.height = height;
                            }
                        }
                    }["RowContainerComp.useCallback11[setRef2]"],
                    setRowCtrls: {
                        "RowContainerComp.useCallback11[setRef2]": ({ rowCtrls, useFlushSync })=>{
                            const useFlush = !!useFlushSync && rowCtrlsRef.current.length > 0 && rowCtrls.length > 0;
                            rowCtrlsRef.current = rowCtrls;
                            updateRowCtrlsOrdered(useFlush);
                        }
                    }["RowContainerComp.useCallback11[setRef2]"],
                    setSpannedRowCtrls: {
                        "RowContainerComp.useCallback11[setRef2]": (rowCtrls, useFlushSync)=>{
                            const useFlush = !!useFlushSync && spannedRowCtrlsRef.current.length > 0 && rowCtrls.length > 0;
                            spannedRowCtrlsRef.current = rowCtrls;
                            updateSpannedRowCtrlsOrdered(useFlush);
                        }
                    }["RowContainerComp.useCallback11[setRef2]"],
                    setDomOrder: {
                        "RowContainerComp.useCallback11[setRef2]": (domOrder)=>{
                            if (domOrderRef.current != domOrder) {
                                domOrderRef.current = domOrder;
                                updateRowCtrlsOrdered(false);
                            }
                        }
                    }["RowContainerComp.useCallback11[setRef2]"],
                    setContainerWidth: {
                        "RowContainerComp.useCallback11[setRef2]": (width)=>{
                            if (eContainer.current) {
                                eContainer.current.style.width = width;
                            }
                        }
                    }["RowContainerComp.useCallback11[setRef2]"],
                    setOffsetTop: {
                        "RowContainerComp.useCallback11[setRef2]": (offset)=>{
                            if (eContainer.current) {
                                eContainer.current.style.transform = `translateY(${offset})`;
                            }
                        }
                    }["RowContainerComp.useCallback11[setRef2]"]
                };
                rowContainerCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowContainerCtrl"](name));
                rowContainerCtrlRef.current.setComp(compProxy, eContainer.current, eSpanContainer.current ?? void 0, eViewport.current);
            }
        }
    }["RowContainerComp.useCallback11[setRef2]"], [
        areElementsReady,
        areElementsRemoved
    ]);
    const setContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowContainerComp.useCallback11[setContainerRef]": (e)=>{
            eContainer.current = e;
            setRef2();
        }
    }["RowContainerComp.useCallback11[setContainerRef]"], [
        setRef2
    ]);
    const setSpanContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowContainerComp.useCallback11[setSpanContainerRef]": (e)=>{
            eSpanContainer.current = e;
            setRef2();
        }
    }["RowContainerComp.useCallback11[setSpanContainerRef]"], [
        setRef2
    ]);
    const setViewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RowContainerComp.useCallback11[setViewportRef]": (e)=>{
            eViewport.current = e;
            setRef2();
        }
    }["RowContainerComp.useCallback11[setViewportRef]"], [
        setRef2
    ]);
    const buildContainer = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: containerClasses,
            ref: setContainerRef,
            role: shouldRenderViewport ? "presentation" : "rowgroup"
        }, rowCtrlsOrdered.map((rowCtrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(rowComp_default, {
                rowCtrl,
                containerType: containerOptions.type,
                key: rowCtrl.instanceId
            })));
    if (!shouldRenderViewport) {
        return buildContainer();
    }
    const buildSpanContainer = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: spanClasses,
            ref: setSpanContainerRef,
            role: "presentation"
        }, spannedRowCtrlsOrdered.map((rowCtrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(rowComp_default, {
                rowCtrl,
                containerType: containerOptions.type,
                key: rowCtrl.instanceId
            })));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: viewportClasses,
        ref: setViewportRef,
        role: "rowgroup"
    }, buildContainer(), isSpanning ? buildSpanContainer() : null);
};
var rowContainerComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(RowContainerComp);
// packages/ag-grid-react/src/reactUi/gridBodyComp.tsx
var GridBodyComp = ()=>{
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { context, overlays } = beans;
    const [rowAnimationClass, setRowAnimationClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [topHeight, setTopHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bottomHeight, setBottomHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [stickyTopHeight, setStickyTopHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyTopTop, setStickyTopTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyTopWidth, setStickyTopWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100%");
    const [stickyBottomHeight, setStickyBottomHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyBottomBottom, setStickyBottomBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyBottomWidth, setStickyBottomWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100%");
    const [topInvisible, setTopInvisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bottomInvisible, setBottomInvisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [forceVerticalScrollClass, setForceVerticalScrollClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [topAndBottomOverflowY, setTopAndBottomOverflowY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cellSelectableCss, setCellSelectableCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [layoutClass, setLayoutClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ag-layout-normal");
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (!cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eRoot.current);
    }
    const eRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eStickyTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eStickyBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eBodyViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beansToDestroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const destroyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    reactComment_default(" AG Grid Body ", eRoot);
    reactComment_default(" AG Pinned Top ", eTop);
    reactComment_default(" AG Sticky Top ", eStickyTop);
    reactComment_default(" AG Middle ", eBodyViewport);
    reactComment_default(" AG Pinned Bottom ", eBottom);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GridBodyComp.useCallback12[setRef2]": (eRef)=>{
            eRoot.current = eRef;
            if (!eRef || context.isDestroyed()) {
                beansToDestroy.current = context.destroyBeans(beansToDestroy.current);
                for (const f of destroyFuncs.current){
                    f();
                }
                destroyFuncs.current = [];
                return;
            }
            const attachToDom = {
                "GridBodyComp.useCallback12[setRef2].attachToDom": (eParent, eChild)=>{
                    eParent.appendChild(eChild);
                    destroyFuncs.current.push({
                        "GridBodyComp.useCallback12[setRef2].attachToDom": ()=>eChild.remove()
                    }["GridBodyComp.useCallback12[setRef2].attachToDom"]);
                }
            }["GridBodyComp.useCallback12[setRef2].attachToDom"];
            const newComp = {
                "GridBodyComp.useCallback12[setRef2].newComp": (compClass)=>{
                    const comp = context.createBean(new compClass());
                    beansToDestroy.current.push(comp);
                    return comp;
                }
            }["GridBodyComp.useCallback12[setRef2].newComp"];
            const addComp = {
                "GridBodyComp.useCallback12[setRef2].addComp": (eParent, compClass, comment)=>{
                    attachToDom(eParent, document.createComment(comment));
                    attachToDom(eParent, newComp(compClass).getGui());
                }
            }["GridBodyComp.useCallback12[setRef2].addComp"];
            addComp(eRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FakeHScrollComp"], " AG Fake Horizontal Scroll ");
            const overlayComp = overlays?.getOverlayWrapperCompClass();
            if (overlayComp) {
                addComp(eRef, overlayComp, " AG Overlay Wrapper ");
            }
            if (eBody.current) {
                addComp(eBody.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FakeVScrollComp"], " AG Fake Vertical Scroll ");
            }
            const compProxy = {
                setRowAnimationCssOnBodyViewport: setRowAnimationClass,
                setColumnCount: {
                    "GridBodyComp.useCallback12[setRef2]": (count)=>{
                        if (eRoot.current) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setAriaColCount"])(eRoot.current, count);
                        }
                    }
                }["GridBodyComp.useCallback12[setRef2]"],
                setRowCount: {
                    "GridBodyComp.useCallback12[setRef2]": (count)=>{
                        if (eRoot.current) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setAriaRowCount"])(eRoot.current, count);
                        }
                    }
                }["GridBodyComp.useCallback12[setRef2]"],
                setTopHeight,
                setBottomHeight,
                setStickyTopHeight,
                setStickyTopTop,
                setStickyTopWidth,
                setTopInvisible,
                setBottomInvisible,
                setColumnMovingCss: {
                    "GridBodyComp.useCallback12[setRef2]": (cssClass, flag)=>cssManager.current.toggleCss(cssClass, flag)
                }["GridBodyComp.useCallback12[setRef2]"],
                updateLayoutClasses: setLayoutClass,
                setAlwaysVerticalScrollClass: setForceVerticalScrollClass,
                setPinnedTopBottomOverflowY: setTopAndBottomOverflowY,
                setCellSelectableCss: {
                    "GridBodyComp.useCallback12[setRef2]": (cssClass, flag)=>setCellSelectableCss(flag ? cssClass : null)
                }["GridBodyComp.useCallback12[setRef2]"],
                setBodyViewportWidth: {
                    "GridBodyComp.useCallback12[setRef2]": (width)=>{
                        if (eBodyViewport.current) {
                            eBodyViewport.current.style.width = width;
                        }
                    }
                }["GridBodyComp.useCallback12[setRef2]"],
                registerBodyViewportResizeListener: {
                    "GridBodyComp.useCallback12[setRef2]": (listener)=>{
                        if (eBodyViewport.current) {
                            const unsubscribeFromResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_observeResize"])(beans, eBodyViewport.current, listener);
                            destroyFuncs.current.push({
                                "GridBodyComp.useCallback12[setRef2]": ()=>unsubscribeFromResize()
                            }["GridBodyComp.useCallback12[setRef2]"]);
                        }
                    }
                }["GridBodyComp.useCallback12[setRef2]"],
                setStickyBottomHeight,
                setStickyBottomBottom,
                setStickyBottomWidth,
                setGridRootRole: {
                    "GridBodyComp.useCallback12[setRef2]": (role)=>eRef.setAttribute("role", role)
                }["GridBodyComp.useCallback12[setRef2]"]
            };
            const ctrl = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridBodyCtrl"]());
            beansToDestroy.current.push(ctrl);
            ctrl.setComp(compProxy, eRef, eBodyViewport.current, eTop.current, eBottom.current, eStickyTop.current, eStickyBottom.current);
        }
    }["GridBodyComp.useCallback12[setRef2]"], []);
    const rootClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[rootClasses]": ()=>classesList("ag-root", "ag-unselectable", layoutClass)
    }["GridBodyComp.useMemo11[rootClasses]"], [
        layoutClass
    ]);
    const bodyViewportClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[bodyViewportClasses]": ()=>classesList("ag-body-viewport", rowAnimationClass, layoutClass, forceVerticalScrollClass, cellSelectableCss)
    }["GridBodyComp.useMemo11[bodyViewportClasses]"], [
        rowAnimationClass,
        layoutClass,
        forceVerticalScrollClass,
        cellSelectableCss
    ]);
    const bodyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[bodyClasses]": ()=>classesList("ag-body", layoutClass)
    }["GridBodyComp.useMemo11[bodyClasses]"], [
        layoutClass
    ]);
    const topClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[topClasses]": ()=>classesList("ag-floating-top", topInvisible ? "ag-invisible" : null, cellSelectableCss)
    }["GridBodyComp.useMemo11[topClasses]"], [
        cellSelectableCss,
        topInvisible
    ]);
    const stickyTopClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[stickyTopClasses]": ()=>classesList("ag-sticky-top", cellSelectableCss)
    }["GridBodyComp.useMemo11[stickyTopClasses]"], [
        cellSelectableCss
    ]);
    const stickyBottomClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[stickyBottomClasses]": ()=>classesList("ag-sticky-bottom", stickyBottomHeight === "0px" ? "ag-invisible" : null, cellSelectableCss)
    }["GridBodyComp.useMemo11[stickyBottomClasses]"], [
        cellSelectableCss,
        stickyBottomHeight
    ]);
    const bottomClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[bottomClasses]": ()=>classesList("ag-floating-bottom", bottomInvisible ? "ag-invisible" : null, cellSelectableCss)
    }["GridBodyComp.useMemo11[bottomClasses]"], [
        cellSelectableCss,
        bottomInvisible
    ]);
    const topStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[topStyle]": ()=>({
                height: topHeight,
                minHeight: topHeight,
                overflowY: topAndBottomOverflowY
            })
    }["GridBodyComp.useMemo11[topStyle]"], [
        topHeight,
        topAndBottomOverflowY
    ]);
    const stickyTopStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[stickyTopStyle]": ()=>({
                height: stickyTopHeight,
                top: stickyTopTop,
                width: stickyTopWidth
            })
    }["GridBodyComp.useMemo11[stickyTopStyle]"], [
        stickyTopHeight,
        stickyTopTop,
        stickyTopWidth
    ]);
    const stickyBottomStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[stickyBottomStyle]": ()=>({
                height: stickyBottomHeight,
                bottom: stickyBottomBottom,
                width: stickyBottomWidth
            })
    }["GridBodyComp.useMemo11[stickyBottomStyle]"], [
        stickyBottomHeight,
        stickyBottomBottom,
        stickyBottomWidth
    ]);
    const bottomStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridBodyComp.useMemo11[bottomStyle]": ()=>({
                height: bottomHeight,
                minHeight: bottomHeight,
                overflowY: topAndBottomOverflowY
            })
    }["GridBodyComp.useMemo11[bottomStyle]"], [
        bottomHeight,
        topAndBottomOverflowY
    ]);
    const createRowContainer = (container)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(rowContainerComp_default, {
            name: container,
            key: `${container}-container`
        });
    const createSection = ({ section, children, className, style })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: section,
            className,
            role: "presentation",
            style
        }, children.map(createRowContainer));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: rootClasses
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(gridHeaderComp_default, null), createSection({
        section: eTop,
        className: topClasses,
        style: topStyle,
        children: [
            "topLeft",
            "topCenter",
            "topRight",
            "topFullWidth"
        ]
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: bodyClasses,
        ref: eBody,
        role: "presentation"
    }, createSection({
        section: eBodyViewport,
        className: bodyViewportClasses,
        children: [
            "left",
            "center",
            "right",
            "fullWidth"
        ]
    })), createSection({
        section: eStickyTop,
        className: stickyTopClasses,
        style: stickyTopStyle,
        children: [
            "stickyTopLeft",
            "stickyTopCenter",
            "stickyTopRight",
            "stickyTopFullWidth"
        ]
    }), createSection({
        section: eStickyBottom,
        className: stickyBottomClasses,
        style: stickyBottomStyle,
        children: [
            "stickyBottomLeft",
            "stickyBottomCenter",
            "stickyBottomRight",
            "stickyBottomFullWidth"
        ]
    }), createSection({
        section: eBottom,
        className: bottomClasses,
        style: bottomStyle,
        children: [
            "bottomLeft",
            "bottomCenter",
            "bottomRight",
            "bottomFullWidth"
        ]
    }));
};
var gridBodyComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(GridBodyComp);
;
;
var TabGuardCompRef = (props, forwardRef4)=>{
    const { children, eFocusableElement, onTabKeyDown, gridCtrl, forceFocusOutWhenTabGuardsAreEmpty, isEmpty } = props;
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const topTabGuardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomTabGuardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabGuardCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const setTabIndex = (value)=>{
        const processedValue = value == null ? void 0 : parseInt(value, 10).toString();
        for (const tabGuard of [
            topTabGuardRef,
            bottomTabGuardRef
        ]){
            if (processedValue === void 0) {
                tabGuard.current?.removeAttribute("tabindex");
            } else {
                tabGuard.current?.setAttribute("tabindex", processedValue);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardRef4, {
        "TabGuardCompRef.useImperativeHandle2": ()=>({
                forceFocusOutOfContainer (up) {
                    tabGuardCtrlRef.current?.forceFocusOutOfContainer(up);
                }
            })
    }["TabGuardCompRef.useImperativeHandle2"]);
    const setupCtrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabGuardCompRef.useCallback13[setupCtrl]": ()=>{
            const topTabGuard = topTabGuardRef.current;
            const bottomTabGuard = bottomTabGuardRef.current;
            if (!topTabGuard && !bottomTabGuard || context.isDestroyed()) {
                tabGuardCtrlRef.current = context.destroyBean(tabGuardCtrlRef.current);
                return;
            }
            if (topTabGuard && bottomTabGuard) {
                const compProxy = {
                    setTabIndex
                };
                tabGuardCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabGuardCtrl"]({
                    comp: compProxy,
                    eTopGuard: topTabGuard,
                    eBottomGuard: bottomTabGuard,
                    eFocusableElement,
                    onTabKeyDown,
                    forceFocusOutWhenTabGuardsAreEmpty,
                    focusInnerElement: {
                        "TabGuardCompRef.useCallback13[setupCtrl]": (fromBottom)=>gridCtrl.focusInnerElement(fromBottom)
                    }["TabGuardCompRef.useCallback13[setupCtrl]"],
                    isEmpty
                }));
            }
        }
    }["TabGuardCompRef.useCallback13[setupCtrl]"], []);
    const setTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabGuardCompRef.useCallback13[setTopRef]": (e)=>{
            topTabGuardRef.current = e;
            setupCtrl();
        }
    }["TabGuardCompRef.useCallback13[setTopRef]"], [
        setupCtrl
    ]);
    const setBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabGuardCompRef.useCallback13[setBottomRef]": (e)=>{
            bottomTabGuardRef.current = e;
            setupCtrl();
        }
    }["TabGuardCompRef.useCallback13[setBottomRef]"], [
        setupCtrl
    ]);
    const createTabGuard = (side)=>{
        const className = side === "top" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabGuardClassNames"].TAB_GUARD_TOP : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabGuardClassNames"].TAB_GUARD_BOTTOM;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabGuardClassNames"].TAB_GUARD} ${className}`,
            role: "presentation",
            ref: side === "top" ? setTopRef : setBottomRef
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, createTabGuard("top"), children, createTabGuard("bottom"));
};
var TabGuardComp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(TabGuardCompRef);
var tabGuardComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(TabGuardComp);
// packages/ag-grid-react/src/reactUi/gridComp.tsx
var GridComp = ({ context })=>{
    const [rtlClass, setRtlClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [layoutClass, setLayoutClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userSelect, setUserSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialised, setInitialised] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tabGuardReady, setTabGuardReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const gridCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eRootWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabGuardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [eGridBodyParent, setGridBodyParent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const focusInnerElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "GridComp.useRef15[focusInnerElementRef]": ()=>void 0
    }["GridComp.useRef15[focusInnerElementRef]"]);
    const paginationCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const focusableContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const onTabKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GridComp.useCallback14[onTabKeyDown]": ()=>void 0
    }["GridComp.useCallback14[onTabKeyDown]"], []);
    reactComment_default(" AG Grid ", eRootWrapperRef);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GridComp.useCallback14[setRef2]": (eRef)=>{
            eRootWrapperRef.current = eRef;
            gridCtrlRef.current = eRef ? context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridCtrl"]()) : context.destroyBean(gridCtrlRef.current);
            if (!eRef || context.isDestroyed()) {
                return;
            }
            const gridCtrl = gridCtrlRef.current;
            focusInnerElementRef.current = gridCtrl.focusInnerElement.bind(gridCtrl);
            const compProxy = {
                destroyGridUi: {
                    "GridComp.useCallback14[setRef2]": ()=>{}
                }["GridComp.useCallback14[setRef2]"],
                // do nothing, as framework users destroy grid by removing the comp
                setRtlClass,
                forceFocusOutOfContainer: {
                    "GridComp.useCallback14[setRef2]": (up)=>{
                        if (!up && paginationCompRef.current?.isDisplayed()) {
                            paginationCompRef.current.forceFocusOutOfContainer(up);
                            return;
                        }
                        tabGuardRef.current?.forceFocusOutOfContainer(up);
                    }
                }["GridComp.useCallback14[setRef2]"],
                updateLayoutClasses: setLayoutClass,
                getFocusableContainers: {
                    "GridComp.useCallback14[setRef2]": ()=>{
                        const comps = [];
                        const gridBodyCompEl = eRootWrapperRef.current?.querySelector(".ag-root");
                        if (gridBodyCompEl) {
                            comps.push({
                                getGui: {
                                    "GridComp.useCallback14[setRef2]": ()=>gridBodyCompEl
                                }["GridComp.useCallback14[setRef2]"]
                            });
                        }
                        for (const comp of focusableContainersRef.current){
                            if (comp.isDisplayed()) {
                                comps.push(comp);
                            }
                        }
                        return comps;
                    }
                }["GridComp.useCallback14[setRef2]"],
                setCursor,
                setUserSelect
            };
            gridCtrl.setComp(compProxy, eRef, eRef);
            setInitialised(true);
        }
    }["GridComp.useCallback14[setRef2]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GridComp.useEffect9": ()=>{
            const gridCtrl = gridCtrlRef.current;
            const eRootWrapper = eRootWrapperRef.current;
            if (!tabGuardReady || !gridCtrl || !eGridBodyParent || !eRootWrapper || context.isDestroyed()) {
                return;
            }
            const beansToDestroy = [];
            const { watermarkSelector, paginationSelector, sideBarSelector, statusBarSelector, gridHeaderDropZonesSelector } = gridCtrl.getOptionalSelectors();
            const additionalEls = [];
            if (gridHeaderDropZonesSelector) {
                const headerDropZonesComp = context.createBean(new gridHeaderDropZonesSelector.component());
                const eGui = headerDropZonesComp.getGui();
                eRootWrapper.insertAdjacentElement("afterbegin", eGui);
                additionalEls.push(eGui);
                beansToDestroy.push(headerDropZonesComp);
            }
            if (sideBarSelector) {
                const sideBarComp = context.createBean(new sideBarSelector.component());
                const eGui = sideBarComp.getGui();
                const bottomTabGuard = eGridBodyParent.querySelector(".ag-tab-guard-bottom");
                if (bottomTabGuard) {
                    bottomTabGuard.insertAdjacentElement("beforebegin", eGui);
                    additionalEls.push(eGui);
                }
                beansToDestroy.push(sideBarComp);
                focusableContainersRef.current.push(sideBarComp);
            }
            const addComponentToDom = {
                "GridComp.useEffect9.addComponentToDom": (component)=>{
                    const comp = context.createBean(new component());
                    const eGui = comp.getGui();
                    eRootWrapper.insertAdjacentElement("beforeend", eGui);
                    additionalEls.push(eGui);
                    beansToDestroy.push(comp);
                    return comp;
                }
            }["GridComp.useEffect9.addComponentToDom"];
            if (statusBarSelector) {
                addComponentToDom(statusBarSelector.component);
            }
            if (paginationSelector) {
                const paginationComp = addComponentToDom(paginationSelector.component);
                paginationCompRef.current = paginationComp;
                focusableContainersRef.current.push(paginationComp);
            }
            if (watermarkSelector) {
                addComponentToDom(watermarkSelector.component);
            }
            return ({
                "GridComp.useEffect9": ()=>{
                    context.destroyBeans(beansToDestroy);
                    for (const el of additionalEls){
                        el.remove();
                    }
                }
            })["GridComp.useEffect9"];
        }
    }["GridComp.useEffect9"], [
        tabGuardReady,
        eGridBodyParent,
        context
    ]);
    const rootWrapperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridComp.useMemo12[rootWrapperClasses]": ()=>classesList("ag-root-wrapper", rtlClass, layoutClass)
    }["GridComp.useMemo12[rootWrapperClasses]"], [
        rtlClass,
        layoutClass
    ]);
    const rootWrapperBodyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridComp.useMemo12[rootWrapperBodyClasses]": ()=>classesList("ag-root-wrapper-body", "ag-focus-managed", layoutClass)
    }["GridComp.useMemo12[rootWrapperBodyClasses]"], [
        layoutClass
    ]);
    const topStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GridComp.useMemo12[topStyle]": ()=>({
                userSelect: userSelect != null ? userSelect : "",
                WebkitUserSelect: userSelect != null ? userSelect : "",
                cursor: cursor != null ? cursor : ""
            })
    }["GridComp.useMemo12[topStyle]"], [
        userSelect,
        cursor
    ]);
    const setTabGuardCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GridComp.useCallback14[setTabGuardCompRef]": (ref)=>{
            tabGuardRef.current = ref;
            setTabGuardReady(ref !== null);
        }
    }["GridComp.useCallback14[setTabGuardCompRef]"], []);
    const isFocusable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GridComp.useCallback14[isFocusable]": ()=>!gridCtrlRef.current?.isFocusable()
    }["GridComp.useCallback14[isFocusable]"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: rootWrapperClasses,
        style: topStyle,
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: rootWrapperBodyClasses,
        ref: setGridBodyParent,
        role: "presentation"
    }, initialised && eGridBodyParent && !context.isDestroyed() && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BeansContext.Provider, {
        value: context.getBeans()
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(tabGuardComp_default, {
        ref: setTabGuardCompRef,
        eFocusableElement: eGridBodyParent,
        onTabKeyDown,
        gridCtrl: gridCtrlRef.current,
        forceFocusOutWhenTabGuardsAreEmpty: true,
        isEmpty: isFocusable
    }, // we wait for initialised before rending the children, so GridComp has created and registered with it's
    // GridCtrl before we create the child GridBodyComp. Otherwise the GridBodyComp would initialise first,
    // before we have set the the Layout CSS classes, causing the GridBodyComp to render rows to a grid that
    // doesn't have it's height specified, which would result if all the rows getting rendered (and if many rows,
    // hangs the UI)
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(gridBodyComp_default, null)))));
};
var gridComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(GridComp);
;
var RenderStatusService = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BeanStub"] {
    postConstruct() {
        if (this.beans.colAutosize) {
            const queueResizeOperationsForTick = this.queueResizeOperationsForTick.bind(this);
            this.addManagedEventListeners({
                rowExpansionStateChanged: queueResizeOperationsForTick,
                expandOrCollapseAll: queueResizeOperationsForTick,
                // Enable devs to resize after they updated via the API
                cellValueChanged: queueResizeOperationsForTick,
                rowNodeDataChanged: queueResizeOperationsForTick,
                rowDataUpdated: queueResizeOperationsForTick
            });
        }
    }
    queueResizeOperationsForTick() {
        const colAutosize = this.beans.colAutosize;
        colAutosize.shouldQueueResizeOperations = true;
        setTimeout(()=>{
            colAutosize.processResizeOperations();
        }, 0);
    }
    areHeaderCellsRendered() {
        return this.beans.ctrlsSvc.getHeaderRowContainerCtrls().every((container)=>container.getAllCtrls().every((ctrl)=>ctrl.areCellsRendered()));
    }
    areCellsRendered() {
        return this.beans.rowRenderer.getAllRowCtrls().every((row)=>row.isRowRendered() && row.getAllCellCtrls().every((cellCtrl)=>!!cellCtrl.eGui));
    }
};
// packages/ag-grid-react/src/reactUi/agGridReactUi.tsx
var deprecatedProps = {
    setGridApi: void 0,
    maxComponentCreationTimeMs: void 0,
    children: void 0
};
var reactPropsNotGridOptions = {
    gridOptions: void 0,
    modules: void 0,
    containerStyle: void 0,
    className: void 0,
    passGridApi: void 0,
    componentWrappingElement: void 0,
    ...deprecatedProps
};
var excludeReactCompProps = new Set(Object.keys(reactPropsNotGridOptions));
var deprecatedReactCompProps = new Set(Object.keys(deprecatedProps));
var AgGridReactUi = (props)=>{
    const apiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const portalManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const destroyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const whenReadyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const frameworkOverridesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const gridIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const ready = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [, setPortalRefresher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const appliedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const updateClassName = (classNameFromReact)=>{
        const classList = eGui.current?.classList;
        const splitClasses = (s = "")=>s.trim().split(/\s+/g).filter(Boolean);
        if (appliedClassName.current !== classNameFromReact) {
            for (const cls of splitClasses(appliedClassName.current)){
                if (classList?.contains(cls)) {
                    classList.remove(cls);
                }
            }
            for (const cls of splitClasses(classNameFromReact)){
                if (!classList?.contains(cls)) {
                    classList?.add(cls);
                }
            }
            appliedClassName.current = classNameFromReact;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "AgGridReactUi.useLayoutEffect8": ()=>{
            updateClassName(props.className);
        }
    }["AgGridReactUi.useLayoutEffect8"], [
        props.className
    ]);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AgGridReactUi.useCallback15[setRef2]": (eRef)=>{
            eGui.current = eRef;
            updateClassName(props.className);
            if (!eRef) {
                for (const f of destroyFuncs.current){
                    f();
                }
                destroyFuncs.current.length = 0;
                return;
            }
            const modules = props.modules || [];
            if (!portalManager.current) {
                portalManager.current = new PortalManager({
                    "AgGridReactUi.useCallback15[setRef2]": ()=>setPortalRefresher({
                            "AgGridReactUi.useCallback15[setRef2]": (prev)=>prev + 1
                        }["AgGridReactUi.useCallback15[setRef2]"])
                }["AgGridReactUi.useCallback15[setRef2]"], props.componentWrappingElement, props.maxComponentCreationTimeMs);
                destroyFuncs.current.push({
                    "AgGridReactUi.useCallback15[setRef2]": ()=>{
                        portalManager.current?.destroy();
                        portalManager.current = null;
                    }
                }["AgGridReactUi.useCallback15[setRef2]"]);
            }
            const mergedGridOps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_combineAttributesAndGridOptions"])(props.gridOptions, props, Object.keys(props).filter({
                "AgGridReactUi.useCallback15[setRef2].mergedGridOps": (key)=>!excludeReactCompProps.has(key)
            }["AgGridReactUi.useCallback15[setRef2].mergedGridOps"]));
            const processQueuedUpdates = {
                "AgGridReactUi.useCallback15[setRef2].processQueuedUpdates": ()=>{
                    if (ready.current) {
                        const getFn = {
                            "AgGridReactUi.useCallback15[setRef2].processQueuedUpdates.getFn": ()=>frameworkOverridesRef.current?.shouldQueueUpdates() ? void 0 : whenReadyFuncs.current.shift()
                        }["AgGridReactUi.useCallback15[setRef2].processQueuedUpdates.getFn"];
                        let fn = getFn();
                        while(fn){
                            fn();
                            fn = getFn();
                        }
                    }
                }
            }["AgGridReactUi.useCallback15[setRef2].processQueuedUpdates"];
            const frameworkOverrides = new ReactFrameworkOverrides(processQueuedUpdates);
            frameworkOverridesRef.current = frameworkOverrides;
            const renderStatus = new RenderStatusService();
            const gridParams = {
                providedBeanInstances: {
                    frameworkCompWrapper: new ReactFrameworkComponentWrapper(portalManager.current, mergedGridOps),
                    renderStatus
                },
                modules,
                frameworkOverrides,
                setThemeOnGridDiv: true
            };
            const createUiCallback = {
                "AgGridReactUi.useCallback15[setRef2].createUiCallback": (ctx)=>{
                    setContext(ctx);
                    ctx.createBean(renderStatus);
                    destroyFuncs.current.push({
                        "AgGridReactUi.useCallback15[setRef2].createUiCallback": ()=>{
                            ctx.destroy();
                        }
                    }["AgGridReactUi.useCallback15[setRef2].createUiCallback"]);
                    ctx.getBean("ctrlsSvc").whenReady({
                        addDestroyFunc: {
                            "AgGridReactUi.useCallback15[setRef2].createUiCallback": (func)=>{
                                destroyFuncs.current.push(func);
                            }
                        }["AgGridReactUi.useCallback15[setRef2].createUiCallback"]
                    }, {
                        "AgGridReactUi.useCallback15[setRef2].createUiCallback": ()=>{
                            if (ctx.isDestroyed()) {
                                return;
                            }
                            const api = apiRef.current;
                            if (api) {
                                props.passGridApi?.(api);
                            }
                        }
                    }["AgGridReactUi.useCallback15[setRef2].createUiCallback"]);
                }
            }["AgGridReactUi.useCallback15[setRef2].createUiCallback"];
            const acceptChangesCallback = {
                "AgGridReactUi.useCallback15[setRef2].acceptChangesCallback": (context2)=>{
                    context2.getBean("ctrlsSvc").whenReady({
                        addDestroyFunc: {
                            "AgGridReactUi.useCallback15[setRef2].acceptChangesCallback": (func)=>{
                                destroyFuncs.current.push(func);
                            }
                        }["AgGridReactUi.useCallback15[setRef2].acceptChangesCallback"]
                    }, {
                        "AgGridReactUi.useCallback15[setRef2].acceptChangesCallback": ()=>{
                            for (const f of whenReadyFuncs.current){
                                f();
                            }
                            whenReadyFuncs.current.length = 0;
                            ready.current = true;
                        }
                    }["AgGridReactUi.useCallback15[setRef2].acceptChangesCallback"]);
                }
            }["AgGridReactUi.useCallback15[setRef2].acceptChangesCallback"];
            const gridCoreCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridCoreCreator"]();
            mergedGridOps.gridId ?? (mergedGridOps.gridId = gridIdRef.current);
            apiRef.current = gridCoreCreator.create(eRef, mergedGridOps, createUiCallback, acceptChangesCallback, gridParams);
            destroyFuncs.current.push({
                "AgGridReactUi.useCallback15[setRef2]": ()=>{
                    apiRef.current = void 0;
                }
            }["AgGridReactUi.useCallback15[setRef2]"]);
            if (apiRef.current) {
                gridIdRef.current = apiRef.current.getGridId();
            }
        }
    }["AgGridReactUi.useCallback15[setRef2]"], []);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AgGridReactUi.useMemo13[style]": ()=>{
            return {
                height: "100%",
                ...props.containerStyle || {}
            };
        }
    }["AgGridReactUi.useMemo13[style]"], [
        props.containerStyle
    ]);
    const processWhenReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AgGridReactUi.useCallback15[processWhenReady]": (func)=>{
            if (ready.current && !frameworkOverridesRef.current?.shouldQueueUpdates()) {
                func();
            } else {
                whenReadyFuncs.current.push(func);
            }
        }
    }["AgGridReactUi.useCallback15[processWhenReady]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgGridReactUi.useEffect10": ()=>{
            const changes = extractGridPropertyChanges(prevProps.current, props);
            prevProps.current = props;
            processWhenReady({
                "AgGridReactUi.useEffect10": ()=>{
                    if (apiRef.current) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_processOnChange"])(changes, apiRef.current);
                    }
                }
            }["AgGridReactUi.useEffect10"]);
        }
    }["AgGridReactUi.useEffect10"], [
        props
    ]);
    const renderMode = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getGridOption"])(props, "renderingMode") === "legacy" ? "legacy" : "default";
    return(// IMPORTANT! Don't set className here, we must use classList
    // imperatively to avoid removing classes set by the grid
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style,
        ref: setRef2
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(RenderModeContext.Provider, {
        value: renderMode
    }, context && !context.isDestroyed() ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(gridComp_default, {
        key: context.instanceId,
        context
    }) : null, portalManager.current?.getPortals() ?? null)));
};
function extractGridPropertyChanges(prevProps, nextProps) {
    const changes = {};
    for (const propKey of Object.keys(nextProps)){
        if (excludeReactCompProps.has(propKey)) {
            if (deprecatedReactCompProps.has(propKey)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_warn"])(274, {
                    prop: propKey
                });
            }
            continue;
        }
        const propValue = nextProps[propKey];
        if (prevProps[propKey] !== propValue) {
            changes[propKey] = propValue;
        }
    }
    return changes;
}
var ReactFrameworkComponentWrapper = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseComponentWrapper"] {
    constructor(parent, gridOptions){
        super();
        this.parent = parent;
        this.gridOptions = gridOptions;
    }
    createWrapper(UserReactComponent, componentType) {
        const gridOptions = this.gridOptions;
        const reactiveCustomComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getGridOption"])(gridOptions, "reactiveCustomComponents");
        if (reactiveCustomComponents) {
            const getComponentClass = (propertyName)=>{
                switch(propertyName){
                    case "filter":
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getGridOption"])(gridOptions, "enableFilterHandlers") ? FilterDisplayComponentWrapper : FilterComponentWrapper;
                    case "floatingFilterComponent":
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getGridOption"])(gridOptions, "enableFilterHandlers") ? FloatingFilterDisplayComponentWrapper : FloatingFilterComponentWrapper;
                    case "dateComponent":
                        return DateComponentWrapper;
                    case "dragAndDropImageComponent":
                        return DragAndDropImageComponentWrapper;
                    case "loadingOverlayComponent":
                    case "noRowsOverlayComponent":
                    case "activeOverlay":
                        return CustomOverlayComponentWrapper;
                    case "statusPanel":
                        return StatusPanelComponentWrapper;
                    case "toolPanel":
                        return ToolPanelComponentWrapper;
                    case "menuItem":
                        return MenuItemComponentWrapper;
                    case "cellRenderer":
                        return CellRendererComponentWrapper;
                    case "innerHeaderComponent":
                        return InnerHeaderComponentWrapper;
                }
            };
            const ComponentClass = getComponentClass(componentType.name);
            if (ComponentClass) {
                return new ComponentClass(UserReactComponent, this.parent, componentType);
            }
        } else {
            switch(componentType.name){
                case "filter":
                case "floatingFilterComponent":
                case "dateComponent":
                case "dragAndDropImageComponent":
                case "loadingOverlayComponent":
                case "noRowsOverlayComponent":
                case "activeOverlay":
                case "statusPanel":
                case "toolPanel":
                case "menuItem":
                case "cellRenderer":
                    warnReactiveCustomComponents();
                    break;
            }
        }
        const suppressFallbackMethods = !componentType.cellRenderer && componentType.name !== "toolPanel";
        return new ReactComponent(UserReactComponent, this.parent, componentType, suppressFallbackMethods);
    }
};
var DetailCellRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { registry, context, gos, rowModel } = beans;
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DetailCellRenderer.useState16": ()=>new CssClasses()
    }["DetailCellRenderer.useState16"]);
    const [gridCssClasses, setGridCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DetailCellRenderer.useState16": ()=>new CssClasses()
    }["DetailCellRenderer.useState16"]);
    const [detailGridOptions, setDetailGridOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [detailRowData, setDetailRowData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const ctrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const eGuiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeObserverDestroyFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const parentModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DetailCellRenderer.useMemo13[parentModules]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getGridRegisteredModules"])(props.api.getGridId(), detailGridOptions?.rowModelType ?? "clientSide")
    }["DetailCellRenderer.useMemo13[parentModules]"], [
        props
    ]);
    const topClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DetailCellRenderer.useMemo13[topClassName]": ()=>cssClasses.toString() + " ag-details-row"
    }["DetailCellRenderer.useMemo13[topClassName]"], [
        cssClasses
    ]);
    const gridClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DetailCellRenderer.useMemo13[gridClassName]": ()=>gridCssClasses.toString() + " ag-details-grid"
    }["DetailCellRenderer.useMemo13[gridClassName]"], [
        gridCssClasses
    ]);
    if (ref) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
            "DetailCellRenderer.useImperativeHandle3": ()=>({
                    refresh () {
                        return ctrlRef.current?.refresh() ?? false;
                    }
                })
        }["DetailCellRenderer.useImperativeHandle3"]);
    }
    if (props.template) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_warn"])(230);
    }
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DetailCellRenderer.useCallback15[setRef2]": (eRef)=>{
            eGuiRef.current = eRef;
            if (!eRef || context.isDestroyed()) {
                ctrlRef.current = context.destroyBean(ctrlRef.current);
                resizeObserverDestroyFunc.current?.();
                return;
            }
            const compProxy = {
                toggleCss: {
                    "DetailCellRenderer.useCallback15[setRef2]": (name, on)=>setCssClasses({
                            "DetailCellRenderer.useCallback15[setRef2]": (prev)=>prev.setClass(name, on)
                        }["DetailCellRenderer.useCallback15[setRef2]"])
                }["DetailCellRenderer.useCallback15[setRef2]"],
                toggleDetailGridCss: {
                    "DetailCellRenderer.useCallback15[setRef2]": (name, on)=>setGridCssClasses({
                            "DetailCellRenderer.useCallback15[setRef2]": (prev)=>prev.setClass(name, on)
                        }["DetailCellRenderer.useCallback15[setRef2]"])
                }["DetailCellRenderer.useCallback15[setRef2]"],
                setDetailGrid: {
                    "DetailCellRenderer.useCallback15[setRef2]": (gridOptions)=>setDetailGridOptions(gridOptions)
                }["DetailCellRenderer.useCallback15[setRef2]"],
                setRowData: {
                    "DetailCellRenderer.useCallback15[setRef2]": (rowData)=>setDetailRowData(rowData)
                }["DetailCellRenderer.useCallback15[setRef2]"],
                getGui: {
                    "DetailCellRenderer.useCallback15[setRef2]": ()=>eGuiRef.current
                }["DetailCellRenderer.useCallback15[setRef2]"]
            };
            const ctrl = registry.createDynamicBean("detailCellRendererCtrl", true);
            if (!ctrl) {
                return;
            }
            context.createBean(ctrl);
            ctrl.init(compProxy, props);
            ctrlRef.current = ctrl;
            if (gos.get("detailRowAutoHeight")) {
                const checkRowSizeFunc = {
                    "DetailCellRenderer.useCallback15[setRef2].checkRowSizeFunc": ()=>{
                        if (eGuiRef.current == null) {
                            return;
                        }
                        const clientHeight = eGuiRef.current.clientHeight;
                        if (clientHeight != null && clientHeight > 0) {
                            const updateRowHeightFunc = {
                                "DetailCellRenderer.useCallback15[setRef2].checkRowSizeFunc.updateRowHeightFunc": ()=>{
                                    props.node.setRowHeight(clientHeight);
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isClientSideRowModel"])(gos, rowModel) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isServerSideRowModel"])(gos, rowModel)) {
                                        rowModel.onRowHeightChanged();
                                    }
                                }
                            }["DetailCellRenderer.useCallback15[setRef2].checkRowSizeFunc.updateRowHeightFunc"];
                            setTimeout(updateRowHeightFunc, 0);
                        }
                    }
                }["DetailCellRenderer.useCallback15[setRef2].checkRowSizeFunc"];
                resizeObserverDestroyFunc.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_observeResize"])(beans, eRef, checkRowSizeFunc);
                checkRowSizeFunc();
            }
        }
    }["DetailCellRenderer.useCallback15[setRef2]"], []);
    const registerGridApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DetailCellRenderer.useCallback15[registerGridApi]": (api)=>{
            ctrlRef.current?.registerDetailWithMaster(api);
        }
    }["DetailCellRenderer.useCallback15[registerGridApi]"], []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: topClassName,
        ref: setRef2
    }, detailGridOptions && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AgGridReactUi, {
        className: gridClassName,
        ...detailGridOptions,
        modules: parentModules,
        rowData: detailRowData,
        passGridApi: registerGridApi
    }));
});
var ReactFrameworkOverrides = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VanillaFrameworkOverrides"] {
    constructor(processQueuedUpdates){
        super("react");
        this.processQueuedUpdates = processQueuedUpdates;
        this.queueUpdates = false;
        this.renderingEngine = "react";
        this.frameworkComponents = {
            agGroupCellRenderer: groupCellRenderer_default,
            agGroupRowRenderer: groupCellRenderer_default,
            agDetailCellRenderer: DetailCellRenderer
        };
        this.wrapIncoming = (callback, source)=>{
            if (source === "ensureVisible") {
                return runWithoutFlushSync(callback);
            }
            return callback();
        };
    }
    frameworkComponent(name) {
        return this.frameworkComponents[name];
    }
    isFrameworkComponent(comp) {
        if (!comp) {
            return false;
        }
        const prototype = comp.prototype;
        const isJsComp = prototype && "getGui" in prototype;
        return !isJsComp;
    }
    getLockOnRefresh() {
        this.queueUpdates = true;
    }
    releaseLockOnRefresh() {
        this.queueUpdates = false;
        this.processQueuedUpdates();
    }
    shouldQueueUpdates() {
        return this.queueUpdates;
    }
    runWhenReadyAsync() {
        return isReact19();
    }
};
// packages/ag-grid-react/src/agGridReact.tsx
var AgGridReact = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(){
        super(...arguments);
        this.apiListeners = [];
        this.setGridApi = (api)=>{
            this.api = api;
            for (const listener of this.apiListeners){
                listener(api);
            }
        };
    }
    registerApiListener(listener) {
        this.apiListeners.push(listener);
    }
    componentWillUnmount() {
        this.apiListeners.length = 0;
    }
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AgGridReactUi, {
            ...this.props,
            passGridApi: this.setGridApi
        });
    }
};
;
function useGridCustomComponent(methods) {
    const { setMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CustomContext);
    setMethods(methods);
}
function useGridCellEditor(callbacks) {
    useGridCustomComponent(callbacks);
}
function useGridDate(callbacks) {
    return useGridCustomComponent(callbacks);
}
function useGridFilter(callbacks) {
    return useGridCustomComponent(callbacks);
}
function useGridFilterDisplay(callbacks) {
    return useGridCustomComponent(callbacks);
}
function useGridFloatingFilter(callbacks) {
    useGridCustomComponent(callbacks);
}
function useGridMenuItem(callbacks) {
    useGridCustomComponent(callbacks);
}
;
}}),
}]);

//# sourceMappingURL=125c1_ag-grid-react_dist_package_index_esm_mjs_503760._.js.map