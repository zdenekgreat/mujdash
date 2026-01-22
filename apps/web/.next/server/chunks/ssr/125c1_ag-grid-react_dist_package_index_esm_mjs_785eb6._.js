module.exports = {

"[project]/node_modules/.pnpm/ag-grid-react@35.0.1_react-_ab181e2c947ad84f73228a8876664370/node_modules/ag-grid-react/dist/package/index.esm.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ag-grid-community@35.0.1/node_modules/ag-grid-community/dist/package/main.esm.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
var BeansContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({});
var RenderModeContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext("default");
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
var reactVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].version?.split(".")[0];
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flushSync(fn);
    } else {
        fn();
    }
};
var agStartTransition = (fn)=>{
    if (!isReactVersion17Minus) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].startTransition(fn);
    } else {
        fn();
    }
};
function agUseSyncExternalStore(subscribe, getSnapshot, defaultSnapshot) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(subscribe, getSnapshot);
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
var GroupCellRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { registry, context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eCheckboxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eExpandedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eContractedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [innerCompDetails, setInnerCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [childCount, setChildCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [expandedCssClasses, setExpandedCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses("ag-hidden"));
    const [contractedCssClasses, setContractedCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses("ag-hidden"));
    const [checkboxCssClasses, setCheckboxCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses("ag-invisible"));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>{
        return {
            // force new instance when grid tries to refresh
            refresh () {
                return false;
            }
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        return showJsComp(innerCompDetails, context, eValueRef.current);
    }, [
        innerCompDetails
    ]);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || context.isDestroyed()) {
            ctrlRef.current = context.destroyBean(ctrlRef.current);
            return;
        }
        const compProxy = {
            setInnerRenderer: (details, valueToDisplay)=>{
                setInnerCompDetails(details);
                setValue(valueToDisplay);
            },
            setChildCount: (count)=>setChildCount(count),
            toggleCss: (name, on)=>setCssClasses((prev)=>prev.setClass(name, on)),
            setContractedDisplayed: (displayed)=>setContractedCssClasses((prev)=>prev.setClass("ag-hidden", !displayed)),
            setExpandedDisplayed: (displayed)=>setExpandedCssClasses((prev)=>prev.setClass("ag-hidden", !displayed)),
            setCheckboxVisible: (visible)=>setCheckboxCssClasses((prev)=>prev.setClass("ag-invisible", !visible)),
            setCheckboxSpacing: (add)=>setCheckboxCssClasses((prev)=>prev.setClass("ag-group-checkbox-spacing", add))
        };
        const groupCellRendererCtrl = registry.createDynamicBean("groupCellRendererCtrl", true);
        if (groupCellRendererCtrl) {
            ctrlRef.current = context.createBean(groupCellRendererCtrl);
            ctrlRef.current.init(compProxy, eRef, eCheckboxRef.current, eExpandedRef.current, eContractedRef.current, GroupCellRenderer, props);
        }
    }, []);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`ag-cell-wrapper ${cssClasses.toString()}`, [
        cssClasses
    ]);
    const expandedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`ag-group-expanded ${expandedCssClasses.toString()}`, [
        expandedCssClasses
    ]);
    const contractedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`ag-group-contracted ${contractedCssClasses.toString()}`, [
        contractedCssClasses
    ]);
    const checkboxClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>`ag-group-checkbox ${checkboxCssClasses.toString()}`, [
        checkboxCssClasses
    ]);
    const useFwRenderer = innerCompDetails?.componentFromFramework;
    const FwRenderer = useFwRenderer ? innerCompDetails.componentClass : void 0;
    const useValue = innerCompDetails == null && value != null;
    const escapedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_toString"])(value);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className,
        ref: setRef2,
        ...!props.colDef ? {
            role: ctrlRef.current?.getCellAriaRole()
        } : {}
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: expandedClassName,
        ref: eExpandedRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: contractedClassName,
        ref: eContractedRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: checkboxClassName,
        ref: eCheckboxRef
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "ag-group-value",
        ref: eValueRef
    }, useValue ? escapedValue : useFwRenderer ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(FwRenderer, {
        ...innerCompDetails.params
    }) : null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: "ag-group-child-count"
    }, childCount));
});
var groupCellRenderer_default = GroupCellRenderer;
;
;
;
var CustomContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    setMethods: ()=>{}
});
// packages/ag-grid-react/src/reactUi/customComp/customWrapperComp.tsx
var CustomWrapperComp = (params)=>{
    const { initialProps, addUpdateCallback, CustomComponentClass, setMethods } = params;
    const [{ key, ...props }, setProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        addUpdateCallback((newProps)=>setProps(newProps));
    }, []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CustomContext.Provider, {
        value: {
            setMethods
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CustomComponentClass, {
        key,
        ...props
    }));
};
var customWrapperComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(CustomWrapperComp);
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
        this.instanceCreated = this.isStatelessComponent() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"].resolve(false) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>this.createReactComponent(resolve));
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
        this.portal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(this.reactElement, this.eParentElement, this.portalKey);
    }
    createElement(reactComponent, props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(reactComponent, props);
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
        this.awaitUpdateCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>this.awaitUpdateCallback.then(()=>{
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
        this.awaitSetMethodsCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
        const awaitFilterPassCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
        this.awaitSetMethodsCallback = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
        (instance.setModel(model) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"].resolve()).then(()=>{
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
    const promise = wrapperComponent?.getInstance?.() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"].resolve(void 0);
    promise.then((comp)=>callback(comp));
}
function warnReactiveCustomComponents() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_warn"])(231);
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
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const [userCompDetails, setUserCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eHeaderCompWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    if (isAlive && !cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eGui.current);
    }
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
            compBean.current = context.destroyBean(compBean.current);
            return;
        }
        compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_EmptyBean"]());
        const refreshSelectAllGui = ()=>{
            const selectAllGui = ctrl.getSelectAllGui();
            if (selectAllGui) {
                eResize.current?.insertAdjacentElement("afterend", selectAllGui);
                compBean.current.addDestroyFunc(()=>selectAllGui.remove());
            }
        };
        const compProxy = {
            setWidth: (width)=>{
                if (eGui.current) {
                    eGui.current.style.width = width;
                }
            },
            toggleCss: (name, on)=>cssManager.current.toggleCss(name, on),
            setUserStyles: (styles)=>setUserStyles(styles),
            setAriaSort: (sort)=>{
                if (eGui.current) {
                    sort ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_setAriaSort"])(eGui.current, sort) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_removeAriaSort"])(eGui.current);
                }
            },
            setUserCompDetails: (compDetails)=>setUserCompDetails(compDetails),
            getUserCompInstance: ()=>userCompRef.current || void 0,
            refreshSelectAllGui,
            removeSelectAllGui: ()=>ctrl.getSelectAllGui()?.remove()
        };
        ctrl.setComp(compProxy, eRef, eResize.current, eHeaderCompWrapper.current, compBean.current);
        refreshSelectAllGui();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>showJsComp(userCompDetails, context, eHeaderCompWrapper.current, userCompRef), [
        userCompDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ctrl.setDragSource(eGui.current);
    }, [
        userCompDetails
    ]);
    const userCompStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = userCompDetails?.componentFromFramework && isComponentStateless(userCompDetails.componentClass);
        return !!res;
    }, [
        userCompDetails
    ]);
    const reactUserComp = userCompDetails?.componentFromFramework;
    const UserCompClass = userCompDetails?.componentClass;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        style: userStyles,
        className: "ag-header-cell",
        role: "columnheader"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eResize,
        className: "ag-header-cell-resize",
        role: "presentation"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eHeaderCompWrapper,
        className: "ag-header-cell-comp-wrapper",
        role: "presentation"
    }, reactUserComp ? userCompStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params,
        ref: userCompRef
    }) : null));
};
var headerCellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(HeaderCellComp);
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
    const { context, gos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses("ag-header-cell", "ag-floating-filter"));
    const [cssBodyClasses, setBodyCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [cssButtonWrapperClasses, setButtonWrapperCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses("ag-floating-filter-button", "ag-hidden"));
    const [buttonWrapperAriaHidden, setButtonWrapperAriaHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("false");
    const [userCompDetails, setUserCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eFloatingFilterBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eButtonWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eButtonShowMainFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userCompResolve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const userCompPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const userCompRef = (value)=>{
        if (value == null) {
            return;
        }
        userCompResolve.current && userCompResolve.current(value);
    };
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
            compBean.current = context.destroyBean(compBean.current);
            return;
        }
        compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_EmptyBean"]());
        userCompPromise.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
            userCompResolve.current = resolve;
        });
        const compProxy = {
            toggleCss: (name, on)=>setCssClasses((prev)=>prev.setClass(name, on)),
            setUserStyles: (styles)=>setUserStyles(styles),
            addOrRemoveBodyCssClass: (name, on)=>setBodyCssClasses((prev)=>prev.setClass(name, on)),
            setButtonWrapperDisplayed: (displayed)=>{
                setButtonWrapperCssClasses((prev)=>prev.setClass("ag-hidden", !displayed));
                setButtonWrapperAriaHidden(!displayed ? "true" : "false");
            },
            setWidth: (width)=>{
                if (eGui.current) {
                    eGui.current.style.width = width;
                }
            },
            setCompDetails: (compDetails)=>setUserCompDetails(compDetails),
            getFloatingFilterComp: ()=>userCompPromise.current ? userCompPromise.current : null,
            setMenuIcon: (eIcon)=>eButtonShowMainFilter.current?.appendChild(eIcon)
        };
        ctrl.setComp(compProxy, eRef, eButtonShowMainFilter.current, eFloatingFilterBody.current, compBean.current);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>showJsComp(userCompDetails, context, eFloatingFilterBody.current, userCompRef), [
        userCompDetails
    ]);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cssClasses.toString(), [
        cssClasses
    ]);
    const bodyClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cssBodyClasses.toString(), [
        cssBodyClasses
    ]);
    const buttonWrapperClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cssButtonWrapperClasses.toString(), [
        cssButtonWrapperClasses
    ]);
    const userCompStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = userCompDetails && userCompDetails.componentFromFramework && isComponentStateless(userCompDetails.componentClass);
        return !!res;
    }, [
        userCompDetails
    ]);
    const reactiveCustomComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>gos.get("reactiveCustomComponents"), []);
    const enableFilterHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>gos.get("enableFilterHandlers"), []);
    const [floatingFilterCompProxy, setFloatingFilterCompProxy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userCompDetails?.componentFromFramework) {
            if (reactiveCustomComponents) {
                const ProxyClass = enableFilterHandlers ? FloatingFilterDisplayComponentProxy : FloatingFilterComponentProxy;
                const compProxy = new ProxyClass(userCompDetails.params, ()=>setRenderKey((prev)=>prev + 1));
                userCompRef(compProxy);
                setFloatingFilterCompProxy(compProxy);
            } else {
                warnReactiveCustomComponents();
            }
        }
    }, [
        userCompDetails
    ]);
    const floatingFilterProps = floatingFilterCompProxy?.getProps();
    const reactUserComp = userCompDetails?.componentFromFramework;
    const UserCompClass = userCompDetails?.componentClass;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        style: userStyles,
        className,
        role: "gridcell"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eFloatingFilterBody,
        className: bodyClassName,
        role: "presentation"
    }, reactUserComp ? reactiveCustomComponents ? floatingFilterProps && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CustomContext.Provider, {
        value: {
            setMethods: (methods)=>floatingFilterCompProxy.setMethods(methods)
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...floatingFilterProps
    })) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params,
        ref: userCompStateless ? ()=>{} : userCompRef
    }) : null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eButtonWrapper,
        "aria-hidden": buttonWrapperAriaHidden,
        className: buttonWrapperClassName,
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ref: eButtonShowMainFilter,
        type: "button",
        className: "ag-button ag-floating-filter-button-button",
        tabIndex: -1
    })));
};
var headerFilterCellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(HeaderFilterCellComp);
;
;
var HeaderGroupCellComp = ({ ctrl })=>{
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [cssResizableClasses, setResizableCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [resizableAriaHidden, setResizableAriaHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("false");
    const [ariaExpanded, setAriaExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [userCompDetails, setUserCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eHeaderCompWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
            compBean.current = context.destroyBean(compBean.current);
            return;
        }
        compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_EmptyBean"]());
        const compProxy = {
            setWidth: (width)=>{
                if (eGui.current) {
                    eGui.current.style.width = width;
                }
            },
            toggleCss: (name, on)=>setCssClasses((prev)=>prev.setClass(name, on)),
            setUserStyles: (styles)=>setUserStyles(styles),
            setHeaderWrapperHidden: (hidden)=>{
                const headerCompWrapper = eHeaderCompWrapper.current;
                if (!headerCompWrapper) {
                    return;
                }
                if (hidden) {
                    headerCompWrapper.style.setProperty("display", "none");
                } else {
                    headerCompWrapper.style.removeProperty("display");
                }
            },
            setHeaderWrapperMaxHeight: (value)=>{
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
            },
            setUserCompDetails: (compDetails)=>setUserCompDetails(compDetails),
            setResizableDisplayed: (displayed)=>{
                setResizableCssClasses((prev)=>prev.setClass("ag-hidden", !displayed));
                setResizableAriaHidden(!displayed ? "true" : "false");
            },
            setAriaExpanded: (expanded)=>setAriaExpanded(expanded),
            getUserCompInstance: ()=>userCompRef.current || void 0
        };
        ctrl.setComp(compProxy, eRef, eResize.current, eHeaderCompWrapper.current, compBean.current);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>showJsComp(userCompDetails, context, eHeaderCompWrapper.current), [
        userCompDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (eGui.current) {
            ctrl.setDragSource(eGui.current);
        }
    }, [
        userCompDetails
    ]);
    const userCompStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = userCompDetails?.componentFromFramework && isComponentStateless(userCompDetails.componentClass);
        return !!res;
    }, [
        userCompDetails
    ]);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>"ag-header-group-cell " + cssClasses.toString(), [
        cssClasses
    ]);
    const resizableClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>"ag-header-cell-resize " + cssResizableClasses.toString(), [
        cssResizableClasses
    ]);
    const reactUserComp = userCompDetails?.componentFromFramework;
    const UserCompClass = userCompDetails?.componentClass;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        style: userStyles,
        className,
        role: "columnheader",
        "aria-expanded": ariaExpanded
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eHeaderCompWrapper,
        className: "ag-header-cell-comp-wrapper",
        role: "presentation"
    }, reactUserComp ? userCompStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UserCompClass, {
        ...userCompDetails.params,
        ref: userCompRef
    }) : null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eResize,
        "aria-hidden": resizableAriaHidden,
        className: resizableClassName
    }));
};
var headerGroupCellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(HeaderGroupCellComp);
// packages/ag-grid-react/src/reactUi/header/headerRowComp.tsx
var HeaderRowComp = ({ ctrl })=>{
    const { gos, context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { topOffset, rowHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ctrl.getTopAndHeight(), []);
    const tabIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>gos.get("tabIndex"), []);
    const [ariaRowIndex, setAriaRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>ctrl.getAriaRowIndex());
    const className = ctrl.headerRowClass;
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>rowHeight + "px");
    const [top, setTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>topOffset + "px");
    const cellCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cellCtrls, setCellCtrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>ctrl.getUpdatedHeaderCtrls());
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || !ctrl.isAlive() || context.isDestroyed()) {
            compBean.current = context.destroyBean(compBean.current);
            return;
        }
        compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_EmptyBean"]());
        const compProxy = {
            setHeight: (height2)=>setHeight(height2),
            setTop: (top2)=>setTop(top2),
            setHeaderCtrls: (ctrls, forceOrder, afterScroll)=>{
                const prevCellCtrls = cellCtrlsRef.current;
                const nextCells = getNextValueIfDifferent(prevCellCtrls, ctrls, forceOrder);
                if (nextCells !== prevCellCtrls) {
                    cellCtrlsRef.current = nextCells;
                    agFlushSync(afterScroll, ()=>setCellCtrls(nextCells));
                }
            },
            setWidth: (width)=>{
                if (eGui.current) {
                    eGui.current.style.width = width;
                }
            },
            setRowIndex: (rowIndex)=>{
                setAriaRowIndex(rowIndex);
            }
        };
        ctrl.setComp(compProxy, compBean.current, false);
    }, []);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            height,
            top
        }), [
        height,
        top
    ]);
    const createCellJsx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cellCtrl)=>{
        switch(ctrl.type){
            case "group":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerGroupCellComp_default, {
                    ctrl: cellCtrl,
                    key: cellCtrl.instanceId
                });
            case "filter":
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerFilterCellComp_default, {
                    ctrl: cellCtrl,
                    key: cellCtrl.instanceId
                });
            default:
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerCellComp_default, {
                    ctrl: cellCtrl,
                    key: cellCtrl.instanceId
                });
        }
    }, []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className,
        role: "row",
        style,
        tabIndex,
        "aria-rowindex": ariaRowIndex
    }, cellCtrls.map(createCellJsx));
};
var headerRowComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(HeaderRowComp);
// packages/ag-grid-react/src/reactUi/header/headerRowContainerComp.tsx
var HeaderRowContainerComp = ({ pinned })=>{
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [headerRowCtrls, setHeaderRowCtrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eCenterContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRowCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const pinnedLeft = pinned === "left";
    const pinnedRight = pinned === "right";
    const centre = !pinnedLeft && !pinnedRight;
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || context.isDestroyed()) {
            headerRowCtrlRef.current = context.destroyBean(headerRowCtrlRef.current);
            return;
        }
        headerRowCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderRowContainerCtrl"](pinned));
        const compProxy = {
            setDisplayed,
            setCtrls: (ctrls)=>setHeaderRowCtrls(ctrls),
            // centre only
            setCenterWidth: (width)=>{
                if (eCenterContainer.current) {
                    eCenterContainer.current.style.width = width;
                }
            },
            setViewportScrollLeft: (left)=>{
                if (eGui.current) {
                    eGui.current.scrollLeft = left;
                }
            },
            // pinned only
            setPinnedContainerWidth: (width)=>{
                if (eGui.current) {
                    eGui.current.style.width = width;
                    eGui.current.style.minWidth = width;
                    eGui.current.style.maxWidth = width;
                }
            }
        };
        headerRowCtrlRef.current.setComp(compProxy, eGui.current);
    }, []);
    const className = !displayed ? "ag-hidden" : "";
    const insertRowsJsx = ()=>headerRowCtrls.map((ctrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerRowComp_default, {
                ctrl,
                key: ctrl.instanceId
            }));
    return pinnedLeft ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: "ag-pinned-left-header " + className,
        "aria-hidden": !displayed,
        role: "rowgroup"
    }, insertRowsJsx()) : pinnedRight ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: "ag-pinned-right-header " + className,
        "aria-hidden": !displayed,
        role: "rowgroup"
    }, insertRowsJsx()) : centre ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: "ag-header-viewport " + className,
        role: "rowgroup",
        tabIndex: -1
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: eCenterContainer,
        className: "ag-header-container",
        role: "presentation"
    }, insertRowsJsx())) : null;
};
var headerRowContainerComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(HeaderRowContainerComp);
// packages/ag-grid-react/src/reactUi/header/gridHeaderComp.tsx
var GridHeaderComp = ()=>{
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        if (!eRef || context.isDestroyed()) {
            gridCtrlRef.current = context.destroyBean(gridCtrlRef.current);
            return;
        }
        gridCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridHeaderCtrl"]());
        const compProxy = {
            toggleCss: (name, on)=>setCssClasses((prev)=>prev.setClass(name, on)),
            setHeightAndMinHeight: (height2)=>setHeight(height2)
        };
        gridCtrlRef.current.setComp(compProxy, eRef, eRef);
    }, []);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = cssClasses.toString();
        return "ag-header " + res;
    }, [
        cssClasses
    ]);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            height,
            minHeight: height
        }), [
        height
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className,
        style,
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerRowContainerComp_default, {
        pinned: "left"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerRowContainerComp_default, {
        pinned: null
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(headerRowContainerComp_default, {
        pinned: "right"
    }));
};
var gridHeaderComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(GridHeaderComp);
;
var useReactCommentEffect = (comment, eForCommentRef)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const eForComment = eForCommentRef.current;
        if (eForComment) {
            const eParent = eForComment.parentElement;
            if (eParent) {
                const eComment = document.createComment(comment);
                eParent.insertBefore(eComment, eForComment);
                return ()=>{
                    eComment.remove();
                };
            }
        }
    }, [
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
        this.instanceCreated = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgPromise"]((resolve)=>{
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
    const effectFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(effect);
    const destroyFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const effectCalled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    if (effectCalled.current) {
        rendered.current = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!effectCalled.current) {
            destroyFn.current = effectFn.current();
            effectCalled.current = true;
        }
        setVal((val)=>val + 1);
        return ()=>{
            if (!rendered.current) {
                return;
            }
            destroyFn.current?.();
        };
    }, []);
};
// packages/ag-grid-react/src/reactUi/cells/popupEditorComp.tsx
var PopupEditorComp = (props)=>{
    const [popupEditorWrapper, setPopupEditorWrapper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { context, popupSvc, gos, editSvc } = beans;
    const { editDetails, cellCtrl, eParentCell } = props;
    useEffectOnce(()=>{
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
                closedCallback: ()=>{
                    cellCtrl.onPopupEditorClosed();
                },
                anchorToElement: eParentCell,
                positionCallback,
                ariaOwns: eParentCell
            });
            hideEditorPopup = addPopupRes ? addPopupRes.hideFunc : void 0;
            setPopupEditorWrapper(wrapper);
            props.jsChildComp?.afterGuiAttached?.();
        }
        return ()=>{
            hideEditorPopup?.();
            context.destroyBean(wrapper);
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        return ()=>{
            if (cellCtrl.isCellFocused() && popupEditorWrapper?.getGui().contains((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getActiveDomElement"])(beans))) {
                eParentCell.focus({
                    preventScroll: true
                });
            }
        };
    }, [
        popupEditorWrapper
    ]);
    return popupEditorWrapper && props.wrappedContent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(props.wrappedContent, popupEditorWrapper.getGui()) : null;
};
var popupEditorComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(PopupEditorComp);
// packages/ag-grid-react/src/reactUi/cells/cellEditorComp.tsx
var jsxEditorProxy = (editDetails, CellEditorClass, setRef2)=>{
    const { compProxy } = editDetails;
    setRef2(compProxy);
    const props = compProxy.getProps();
    const isStateless = isComponentStateless(CellEditorClass);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CustomContext.Provider, {
        value: {
            setMethods: (methods)=>compProxy.setMethods(methods)
        }
    }, isStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CellEditorClass, {
        ...props
    }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CellEditorClass, {
        ...props,
        ref: (ref)=>compProxy.setRef(ref)
    }));
};
var jsxEditor = (editDetails, CellEditorClass, setRef2)=>{
    const newFormat = editDetails.compProxy;
    return newFormat ? jsxEditorProxy(editDetails, CellEditorClass, setRef2) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CellEditorClass, {
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
    return reactInlineEditor ? jsxEditor(editDetails, CellEditorClass, setCellEditorRef) : reactPopupEditor ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(popupEditorComp_default, {
        editDetails,
        cellCtrl,
        eParentCell: eGui,
        wrappedContent: jsxEditor(editDetails, CellEditorClass, setCellEditorRef)
    }) : jsPopupEditor && jsEditorComp ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(popupEditorComp_default, {
        editDetails,
        cellCtrl,
        eParentCell: eGui,
        jsChildComp: jsEditorComp
    }) : null;
};
;
var useJsCellRenderer = (showDetails, showTools, eCellValue, cellValueVersion, jsCellRendererRef, eGui, suppressInlineEditRenderer = false)=>{
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const destroyCellRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        promise.then((comp)=>{
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
        });
    }, [
        showDetails,
        showTools,
        cellValueVersion,
        suppressInlineEditRenderer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return destroyCellRenderer;
    }, []);
};
var showJsRenderer_default = useJsCellRenderer;
;
var SkeletonCellRenderer = ({ cellCtrl, parent })=>{
    const jsCellRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const renderDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { loadingComp } = cellCtrl.getDeferLoadingCellRenderer();
        return loadingComp ? {
            value: void 0,
            compDetails: loadingComp,
            force: false
        } : void 0;
    }, [
        cellCtrl
    ]);
    showJsRenderer_default(renderDetails, false, void 0, 1, jsCellRendererRef, parent);
    if (renderDetails?.compDetails?.componentFromFramework) {
        const CellRendererClass = renderDetails.compDetails.componentClass;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CellRendererClass, {
            ...renderDetails.compDetails.params
        });
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null);
};
// packages/ag-grid-react/src/reactUi/cells/cellComp.tsx
var CellComp = ({ cellCtrl, printLayout, editingCell })=>{
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { context } = beans;
    const { column: { colIdSanitised }, instanceId } = cellCtrl;
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [renderDetails, setRenderDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>cellCtrl.isCellRenderer() ? void 0 : {
            compDetails: void 0,
            value: cellCtrl.getValueToDisplay(),
            force: false
        });
    const [editDetails, setEditDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [renderKey, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [includeSelection, setIncludeSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includeRowDrag, setIncludeRowDrag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includeDndSource, setIncludeDndSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [jsEditorComp, setJsEditorComp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const forceWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cellCtrl.isForceWrapper(), [
        cellCtrl
    ]);
    const cellAriaRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cellCtrl.getCellAriaRole(), [
        cellCtrl
    ]);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cellRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const jsCellRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const cellEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eCellWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const cellWrapperDestroyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rowDragCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eCellValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [cellValueVersion, setCellValueVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const setCellValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ref)=>{
        eCellValue.current = ref;
        setCellValueVersion((v)=>v + 1);
    }, []);
    const showTools = renderDetails != null && (includeSelection || includeDndSource || includeRowDrag) && (editDetails == null || !!editDetails.popup);
    const showCellWrapper = forceWrapper || showTools;
    const cellValueClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return cellCtrl.getCellValueClass();
    }, [
        cellCtrl
    ]);
    const setCellEditorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cellEditor)=>{
        cellEditorRef.current = cellEditor;
        if (cellEditor) {
            const editingCancelledByUserComp = cellEditor.isCancelBeforeStart && cellEditor.isCancelBeforeStart();
            setTimeout(()=>{
                if (editingCancelledByUserComp) {
                    cellCtrl.stopEditing(true);
                    cellCtrl.focusCell(true);
                } else {
                    cellCtrl.cellEditorAttached();
                    cellCtrl.enableEditorTooltipFeature(cellEditor);
                }
            });
        }
    }, [
        cellCtrl
    ]);
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    if (!cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eGui.current);
    }
    const suppressJsRenderer = !!editDetails && !editDetails.popup;
    showJsRenderer_default(renderDetails, showCellWrapper, eCellValue.current, cellValueVersion, jsCellRendererRef, eGui, suppressJsRenderer);
    const lastRenderDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
            setRenderKey((prev)=>prev + 1);
        }
    }, [
        renderDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const doingJsEditor = editDetails && !editDetails.compDetails.componentFromFramework;
        if (!doingJsEditor || context.isDestroyed()) {
            return;
        }
        const compDetails = editDetails.compDetails;
        const isPopup = editDetails.popup === true;
        const cellEditorPromise = compDetails.newAgStackInstance();
        cellEditorPromise.then((cellEditor)=>{
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
        });
        return ()=>{
            cellEditorPromise.then((cellEditor)=>{
                const compGui = cellEditor.getGui();
                cellCtrl.disableEditorTooltipFeature();
                context.destroyBean(cellEditor);
                setCellEditorRef(void 0);
                setJsEditorComp(void 0);
                compGui?.remove();
            });
        };
    }, [
        editDetails
    ]);
    const setCellWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
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
        const addComp = (comp)=>{
            if (comp) {
                eRef.insertAdjacentElement("afterbegin", comp.getGui());
                cellWrapperDestroyFuncs.current.push(()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_removeFromParent"])(comp.getGui());
                    context.destroyBean(comp);
                    if (rowDragCompRef.current === rowDragComp) {
                        rowDragCompRef.current = void 0;
                    }
                });
            }
        };
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
    }, [
        cellCtrl,
        context,
        includeDndSource,
        includeRowDrag,
        includeSelection
    ]);
    const init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const spanReady = !cellCtrl.isCellSpanning() || eWrapper.current;
        const eRef = eGui.current;
        if (!eRef || !spanReady || !cellCtrl || !cellCtrl.isAlive() || context.isDestroyed()) {
            compBean.current = context.destroyBean(compBean.current);
            return;
        }
        compBean.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_EmptyBean"]());
        const compProxy = {
            toggleCss: (name, on)=>cssManager.current.toggleCss(name, on),
            setUserStyles: (styles)=>setUserStyles(styles),
            getFocusableElement: ()=>eGui.current,
            setIncludeSelection: (include)=>setIncludeSelection(include),
            setIncludeRowDrag: (include)=>setIncludeRowDrag(include),
            setIncludeDndSource: (include)=>setIncludeDndSource(include),
            getCellEditor: ()=>cellEditorRef.current ?? null,
            getCellRenderer: ()=>cellRendererRef.current ?? jsCellRendererRef.current,
            getParentOfValue: ()=>eCellValue.current ?? eCellWrapper.current ?? eGui.current,
            setRenderDetails: (compDetails, value, force)=>{
                const setDetails = ()=>{
                    setRenderDetails((prev)=>{
                        if (prev?.compDetails !== compDetails || prev?.value !== value || prev?.force !== force) {
                            return {
                                value,
                                compDetails,
                                force
                            };
                        } else {
                            return prev;
                        }
                    });
                };
                if (compDetails?.params?.deferRender && !cellCtrl.rowNode.group) {
                    const { loadingComp, onReady } = cellCtrl.getDeferLoadingCellRenderer();
                    if (loadingComp) {
                        setRenderDetails({
                            value: void 0,
                            compDetails: loadingComp,
                            force: false
                        });
                        onReady.then(()=>agStartTransition(setDetails));
                        return;
                    }
                }
                setDetails();
            },
            setEditDetails: (compDetails, popup, popupPosition, reactiveCustomComponents)=>{
                if (compDetails) {
                    let compProxy2 = void 0;
                    if (compDetails.componentFromFramework) {
                        if (reactiveCustomComponents) {
                            compProxy2 = new CellEditorComponentProxy(compDetails.params, ()=>setRenderKey((prev)=>prev + 1));
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
            },
            refreshEditStyles: (editing, isPopup)=>{
                if (!eGui.current) {
                    return;
                }
                const { current } = cssManager;
                current.toggleCss("ag-cell-value", !showCellWrapper);
                current.toggleCss("ag-cell-inline-editing", !!editing && !isPopup);
                current.toggleCss("ag-cell-popup-editing", !!editing && !!isPopup);
                current.toggleCss("ag-cell-not-inline-editing", !editing || !!isPopup);
            }
        };
        const cellWrapperOrUndefined = eCellWrapper.current || void 0;
        cellCtrl.setComp(compProxy, eRef, eWrapper.current ?? void 0, cellWrapperOrUndefined, printLayout, editingCell, compBean.current);
    }, []);
    const setGuiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ref)=>{
        eGui.current = ref;
        init();
    }, []);
    const setWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ref)=>{
        eWrapper.current = ref;
        init();
    }, []);
    const reactCellRendererStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = renderDetails?.compDetails?.componentFromFramework && isComponentStateless(renderDetails.compDetails.componentClass);
        return !!res;
    }, [
        renderDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!eGui.current) {
            return;
        }
        const { current } = cssManager;
        current.toggleCss("ag-cell-value", !showCellWrapper);
        current.toggleCss("ag-cell-inline-editing", !!editDetails && !editDetails.popup);
        current.toggleCss("ag-cell-popup-editing", !!editDetails && !!editDetails.popup);
        current.toggleCss("ag-cell-not-inline-editing", !editDetails || !!editDetails.popup);
    });
    const valueOrCellComp = ()=>{
        const { compDetails, value } = renderDetails;
        if (!compDetails) {
            return value?.toString?.() ?? value;
        }
        if (compDetails.componentFromFramework) {
            const CellRendererClass = compDetails.componentClass;
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SkeletonCellRenderer, {
                    cellCtrl,
                    parent: eGui
                })
            }, reactCellRendererStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CellRendererClass, {
                ...compDetails.params,
                key: renderKey
            }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CellRendererClass, {
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
            return showCellWrapper ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                role: "presentation",
                id: `cell-${instanceId}`,
                className: cellValueClass,
                ref: setCellValueRef
            }, valueOrCellComp()) : valueOrCellComp();
        };
        const showEditValue = (details)=>jsxEditValue(details, setCellEditorRef, eGui.current, cellCtrl, jsEditorComp);
        if (editDetails != null) {
            if (editDetails.popup) {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, showCellValue(), showEditValue(editDetails));
            }
            return showEditValue(editDetails);
        }
        return showCellValue();
    };
    const renderCell = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: setGuiRef,
            style: userStyles,
            role: cellAriaRole,
            "col-id": colIdSanitised
        }, showCellWrapper ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ag-cell-wrapper",
            role: "presentation",
            ref: setCellWrapperRef
        }, showCellOrEditor()) : showCellOrEditor());
    if (cellCtrl.isCellSpanning()) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: setWrapperRef,
            className: "ag-spanned-cell-wrapper",
            role: "presentation"
        }, renderCell());
    }
    return renderCell();
};
var cellComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(CellComp);
// packages/ag-grid-react/src/reactUi/rows/rowComp.tsx
var RowComp = ({ rowCtrl, containerType })=>{
    const { context, gos, editSvc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const enableUses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(RenderModeContext) === "default";
    const compBean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const domOrderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(rowCtrl.getDomOrder());
    const isFullWidth = rowCtrl.isFullWidth();
    const isDisplayed = rowCtrl.rowNode.displayed;
    const [rowIndex, setRowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>isDisplayed ? rowCtrl.rowNode.getRowIndexString() : null);
    const [rowId, setRowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>rowCtrl.rowId);
    const [rowBusinessKey, setRowBusinessKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>rowCtrl.businessKey);
    const [userStyles, setUserStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>rowCtrl.rowStyles);
    const cellCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cellCtrlsFlushSync, setCellCtrlsFlushSync] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>null);
    const [fullWidthCompDetails, setFullWidthCompDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [top, setTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>isDisplayed ? rowCtrl.getInitialRowTop(containerType) : void 0);
    const [transform, setTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>isDisplayed ? rowCtrl.getInitialTransform(containerType) : void 0);
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fullWidthCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const fullWidthParamsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const autoHeightSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [autoHeightSetupAttempt, setAutoHeightSetupAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoHeightSetup.current || !fullWidthCompDetails || autoHeightSetupAttempt > 10) {
            return;
        }
        const eChild = eGui.current?.firstChild;
        if (eChild) {
            rowCtrl.setupDetailRowAutoHeight(eChild);
            autoHeightSetup.current = true;
        } else {
            setAutoHeightSetupAttempt((prev)=>prev + 1);
        }
    }, [
        fullWidthCompDetails,
        autoHeightSetupAttempt
    ]);
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    if (!cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eGui.current);
    }
    const cellsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>{});
    const sub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onStoreChange)=>{
        cellsChanged.current = onStoreChange;
        return ()=>{
            cellsChanged.current = ()=>{};
        };
    }, []);
    const cellCtrlsUses = agUseSyncExternalStore(sub, ()=>{
        return cellCtrlsRef.current;
    }, []);
    const cellCtrlsMerged = enableUses ? cellCtrlsUses : cellCtrlsFlushSync;
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGui.current = eRef;
        compBean.current = eRef ? context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_EmptyBean"]()) : context.destroyBean(compBean.current);
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
            toggleCss: (name, on)=>cssManager.current.toggleCss(name, on),
            setDomOrder: (domOrder)=>domOrderRef.current = domOrder,
            setRowIndex,
            setRowId,
            setRowBusinessKey,
            setUserStyles,
            // if we don't maintain the order, then cols will be ripped out and into the dom
            // when cols reordered, which would stop the CSS transitions from working
            setCellCtrls: (next, useFlushSync)=>{
                const prevCellCtrls = cellCtrlsRef.current;
                const nextCells = getNextValueIfDifferent(prevCellCtrls, next, domOrderRef.current);
                if (nextCells !== prevCellCtrls) {
                    cellCtrlsRef.current = nextCells;
                    if (enableUses) {
                        cellsChanged.current();
                    } else {
                        agFlushSync(useFlushSync, ()=>setCellCtrlsFlushSync(nextCells));
                    }
                }
            },
            showFullWidth: (compDetails)=>{
                fullWidthParamsRef.current = compDetails.params;
                setFullWidthCompDetails(compDetails);
            },
            getFullWidthCellRenderer: ()=>fullWidthCompRef.current,
            getFullWidthCellRendererParams: ()=>fullWidthParamsRef.current,
            refreshFullWidth: (getUpdatedParams)=>{
                const fullWidthParams = getUpdatedParams();
                fullWidthParamsRef.current = fullWidthParams;
                if (canRefreshFullWidthRef.current) {
                    setFullWidthCompDetails((prevFullWidthCompDetails)=>({
                            ...prevFullWidthCompDetails,
                            params: fullWidthParams
                        }));
                    return true;
                } else {
                    if (!fullWidthCompRef.current || !fullWidthCompRef.current.refresh) {
                        return false;
                    }
                    return fullWidthCompRef.current.refresh(fullWidthParams);
                }
            }
        };
        rowCtrl.setComp(compProxy, eRef, containerType, compBean.current);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>showJsComp(fullWidthCompDetails, context, eGui.current, fullWidthCompRef), [
        fullWidthCompDetails
    ]);
    const rowStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = {
            top,
            transform
        };
        Object.assign(res, userStyles);
        return res;
    }, [
        top,
        transform,
        userStyles
    ]);
    const showFullWidthFramework = isFullWidth && fullWidthCompDetails?.componentFromFramework;
    const showCells = !isFullWidth && cellCtrlsMerged != null;
    const reactFullWidthCellRendererStateless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const res = fullWidthCompDetails?.componentFromFramework && isComponentStateless(fullWidthCompDetails.componentClass);
        return !!res;
    }, [
        fullWidthCompDetails
    ]);
    const canRefreshFullWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        canRefreshFullWidthRef.current = reactFullWidthCellRendererStateless && !!fullWidthCompDetails && !!gos.get("reactiveCustomComponents");
    }, [
        reactFullWidthCellRendererStateless,
        fullWidthCompDetails
    ]);
    const showCellsJsx = ()=>cellCtrlsMerged?.map((cellCtrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(cellComp_default, {
                cellCtrl,
                editingCell: editSvc?.isEditing(cellCtrl, {
                    withOpenEditor: true
                }) ?? false,
                printLayout: rowCtrl.printLayout,
                key: cellCtrl.instanceId
            }));
    const showFullWidthFrameworkJsx = ()=>{
        const FullWidthComp = fullWidthCompDetails.componentClass;
        return reactFullWidthCellRendererStateless ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(FullWidthComp, {
            ...fullWidthCompDetails.params
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(FullWidthComp, {
            ...fullWidthCompDetails.params,
            ref: fullWidthCompRef
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        role: "row",
        style: rowStyles,
        "row-index": rowIndex,
        "row-id": rowId,
        "row-business-key": rowBusinessKey
    }, showCells ? showCellsJsx() : showFullWidthFramework ? showFullWidthFrameworkJsx() : null);
};
var rowComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(RowComp);
// packages/ag-grid-react/src/reactUi/rows/rowContainerComp.tsx
var RowContainerComp = ({ name })=>{
    const { context, gos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const containerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getRowContainerOptions"])(name), [
        name
    ]);
    const eViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eSpanContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevRowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [rowCtrlsOrdered, setRowCtrlsOrdered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>[]);
    const isSpanning = !!gos.get("enableCellSpan") && !!containerOptions.getSpannedRowCtrls;
    const spannedRowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevSpannedRowCtrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [spannedRowCtrlsOrdered, setSpannedRowCtrlsOrdered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>[]);
    const domOrderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rowContainerCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const viewportClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-viewport", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getRowViewportClass"])(name)), [
        name
    ]);
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getRowContainerClass"])(name)), [
        name
    ]);
    const spanClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-spanning-container", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getRowSpanContainerClass"])(name)), [
        name
    ]);
    const shouldRenderViewport = containerOptions.type === "center" || isSpanning;
    const topLevelRef = shouldRenderViewport ? eViewport : eContainer;
    reactComment_default(" AG Row Container " + name + " ", topLevelRef);
    const areElementsReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const viewportReady = !shouldRenderViewport || eViewport.current != null;
        const containerReady = eContainer.current != null;
        const spanContainerReady = !isSpanning || eSpanContainer.current != null;
        return viewportReady && containerReady && spanContainerReady;
    }, []);
    const areElementsRemoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return eViewport.current == null && eContainer.current == null && eSpanContainer.current == null;
    }, []);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (areElementsRemoved()) {
            rowContainerCtrlRef.current = context.destroyBean(rowContainerCtrlRef.current);
        }
        if (context.isDestroyed()) {
            return;
        }
        if (areElementsReady()) {
            const updateRowCtrlsOrdered = (useFlushSync)=>{
                const next = getNextValueIfDifferent(prevRowCtrlsRef.current, rowCtrlsRef.current, domOrderRef.current);
                if (next !== prevRowCtrlsRef.current) {
                    prevRowCtrlsRef.current = next;
                    agFlushSync(useFlushSync, ()=>setRowCtrlsOrdered(next));
                }
            };
            const updateSpannedRowCtrlsOrdered = (useFlushSync)=>{
                const next = getNextValueIfDifferent(prevSpannedRowCtrlsRef.current, spannedRowCtrlsRef.current, domOrderRef.current);
                if (next !== prevSpannedRowCtrlsRef.current) {
                    prevSpannedRowCtrlsRef.current = next;
                    agFlushSync(useFlushSync, ()=>setSpannedRowCtrlsOrdered(next));
                }
            };
            const compProxy = {
                setHorizontalScroll: (offset)=>{
                    if (eViewport.current) {
                        eViewport.current.scrollLeft = offset;
                    }
                },
                setViewportHeight: (height)=>{
                    if (eViewport.current) {
                        eViewport.current.style.height = height;
                    }
                },
                setRowCtrls: ({ rowCtrls, useFlushSync })=>{
                    const useFlush = !!useFlushSync && rowCtrlsRef.current.length > 0 && rowCtrls.length > 0;
                    rowCtrlsRef.current = rowCtrls;
                    updateRowCtrlsOrdered(useFlush);
                },
                setSpannedRowCtrls: (rowCtrls, useFlushSync)=>{
                    const useFlush = !!useFlushSync && spannedRowCtrlsRef.current.length > 0 && rowCtrls.length > 0;
                    spannedRowCtrlsRef.current = rowCtrls;
                    updateSpannedRowCtrlsOrdered(useFlush);
                },
                setDomOrder: (domOrder)=>{
                    if (domOrderRef.current != domOrder) {
                        domOrderRef.current = domOrder;
                        updateRowCtrlsOrdered(false);
                    }
                },
                setContainerWidth: (width)=>{
                    if (eContainer.current) {
                        eContainer.current.style.width = width;
                    }
                },
                setOffsetTop: (offset)=>{
                    if (eContainer.current) {
                        eContainer.current.style.transform = `translateY(${offset})`;
                    }
                }
            };
            rowContainerCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RowContainerCtrl"](name));
            rowContainerCtrlRef.current.setComp(compProxy, eContainer.current, eSpanContainer.current ?? void 0, eViewport.current);
        }
    }, [
        areElementsReady,
        areElementsRemoved
    ]);
    const setContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        eContainer.current = e;
        setRef2();
    }, [
        setRef2
    ]);
    const setSpanContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        eSpanContainer.current = e;
        setRef2();
    }, [
        setRef2
    ]);
    const setViewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        eViewport.current = e;
        setRef2();
    }, [
        setRef2
    ]);
    const buildContainer = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: containerClasses,
            ref: setContainerRef,
            role: shouldRenderViewport ? "presentation" : "rowgroup"
        }, rowCtrlsOrdered.map((rowCtrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(rowComp_default, {
                rowCtrl,
                containerType: containerOptions.type,
                key: rowCtrl.instanceId
            })));
    if (!shouldRenderViewport) {
        return buildContainer();
    }
    const buildSpanContainer = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: spanClasses,
            ref: setSpanContainerRef,
            role: "presentation"
        }, spannedRowCtrlsOrdered.map((rowCtrl)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(rowComp_default, {
                rowCtrl,
                containerType: containerOptions.type,
                key: rowCtrl.instanceId
            })));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: viewportClasses,
        ref: setViewportRef,
        role: "rowgroup"
    }, buildContainer(), isSpanning ? buildSpanContainer() : null);
};
var rowContainerComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(RowContainerComp);
// packages/ag-grid-react/src/reactUi/gridBodyComp.tsx
var GridBodyComp = ()=>{
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { context, overlays } = beans;
    const [rowAnimationClass, setRowAnimationClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [topHeight, setTopHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bottomHeight, setBottomHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [stickyTopHeight, setStickyTopHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyTopTop, setStickyTopTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyTopWidth, setStickyTopWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("100%");
    const [stickyBottomHeight, setStickyBottomHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyBottomBottom, setStickyBottomBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0px");
    const [stickyBottomWidth, setStickyBottomWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("100%");
    const [topInvisible, setTopInvisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bottomInvisible, setBottomInvisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [forceVerticalScrollClass, setForceVerticalScrollClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [topAndBottomOverflowY, setTopAndBottomOverflowY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cellSelectableCss, setCellSelectableCss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [layoutClass, setLayoutClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ag-layout-normal");
    const cssManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    if (!cssManager.current) {
        cssManager.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CssClassManager"](()=>eRoot.current);
    }
    const eRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eStickyTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eStickyBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eBodyViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beansToDestroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const destroyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    reactComment_default(" AG Grid Body ", eRoot);
    reactComment_default(" AG Pinned Top ", eTop);
    reactComment_default(" AG Sticky Top ", eStickyTop);
    reactComment_default(" AG Middle ", eBodyViewport);
    reactComment_default(" AG Pinned Bottom ", eBottom);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eRoot.current = eRef;
        if (!eRef || context.isDestroyed()) {
            beansToDestroy.current = context.destroyBeans(beansToDestroy.current);
            for (const f of destroyFuncs.current){
                f();
            }
            destroyFuncs.current = [];
            return;
        }
        const attachToDom = (eParent, eChild)=>{
            eParent.appendChild(eChild);
            destroyFuncs.current.push(()=>eChild.remove());
        };
        const newComp = (compClass)=>{
            const comp = context.createBean(new compClass());
            beansToDestroy.current.push(comp);
            return comp;
        };
        const addComp = (eParent, compClass, comment)=>{
            attachToDom(eParent, document.createComment(comment));
            attachToDom(eParent, newComp(compClass).getGui());
        };
        addComp(eRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FakeHScrollComp"], " AG Fake Horizontal Scroll ");
        const overlayComp = overlays?.getOverlayWrapperCompClass();
        if (overlayComp) {
            addComp(eRef, overlayComp, " AG Overlay Wrapper ");
        }
        if (eBody.current) {
            addComp(eBody.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FakeVScrollComp"], " AG Fake Vertical Scroll ");
        }
        const compProxy = {
            setRowAnimationCssOnBodyViewport: setRowAnimationClass,
            setColumnCount: (count)=>{
                if (eRoot.current) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_setAriaColCount"])(eRoot.current, count);
                }
            },
            setRowCount: (count)=>{
                if (eRoot.current) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_setAriaRowCount"])(eRoot.current, count);
                }
            },
            setTopHeight,
            setBottomHeight,
            setStickyTopHeight,
            setStickyTopTop,
            setStickyTopWidth,
            setTopInvisible,
            setBottomInvisible,
            setColumnMovingCss: (cssClass, flag)=>cssManager.current.toggleCss(cssClass, flag),
            updateLayoutClasses: setLayoutClass,
            setAlwaysVerticalScrollClass: setForceVerticalScrollClass,
            setPinnedTopBottomOverflowY: setTopAndBottomOverflowY,
            setCellSelectableCss: (cssClass, flag)=>setCellSelectableCss(flag ? cssClass : null),
            setBodyViewportWidth: (width)=>{
                if (eBodyViewport.current) {
                    eBodyViewport.current.style.width = width;
                }
            },
            registerBodyViewportResizeListener: (listener)=>{
                if (eBodyViewport.current) {
                    const unsubscribeFromResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_observeResize"])(beans, eBodyViewport.current, listener);
                    destroyFuncs.current.push(()=>unsubscribeFromResize());
                }
            },
            setStickyBottomHeight,
            setStickyBottomBottom,
            setStickyBottomWidth,
            setGridRootRole: (role)=>eRef.setAttribute("role", role)
        };
        const ctrl = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridBodyCtrl"]());
        beansToDestroy.current.push(ctrl);
        ctrl.setComp(compProxy, eRef, eBodyViewport.current, eTop.current, eBottom.current, eStickyTop.current, eStickyBottom.current);
    }, []);
    const rootClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-root", "ag-unselectable", layoutClass), [
        layoutClass
    ]);
    const bodyViewportClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-body-viewport", rowAnimationClass, layoutClass, forceVerticalScrollClass, cellSelectableCss), [
        rowAnimationClass,
        layoutClass,
        forceVerticalScrollClass,
        cellSelectableCss
    ]);
    const bodyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-body", layoutClass), [
        layoutClass
    ]);
    const topClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-floating-top", topInvisible ? "ag-invisible" : null, cellSelectableCss), [
        cellSelectableCss,
        topInvisible
    ]);
    const stickyTopClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-sticky-top", cellSelectableCss), [
        cellSelectableCss
    ]);
    const stickyBottomClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-sticky-bottom", stickyBottomHeight === "0px" ? "ag-invisible" : null, cellSelectableCss), [
        cellSelectableCss,
        stickyBottomHeight
    ]);
    const bottomClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-floating-bottom", bottomInvisible ? "ag-invisible" : null, cellSelectableCss), [
        cellSelectableCss,
        bottomInvisible
    ]);
    const topStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            height: topHeight,
            minHeight: topHeight,
            overflowY: topAndBottomOverflowY
        }), [
        topHeight,
        topAndBottomOverflowY
    ]);
    const stickyTopStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            height: stickyTopHeight,
            top: stickyTopTop,
            width: stickyTopWidth
        }), [
        stickyTopHeight,
        stickyTopTop,
        stickyTopWidth
    ]);
    const stickyBottomStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            height: stickyBottomHeight,
            bottom: stickyBottomBottom,
            width: stickyBottomWidth
        }), [
        stickyBottomHeight,
        stickyBottomBottom,
        stickyBottomWidth
    ]);
    const bottomStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            height: bottomHeight,
            minHeight: bottomHeight,
            overflowY: topAndBottomOverflowY
        }), [
        bottomHeight,
        topAndBottomOverflowY
    ]);
    const createRowContainer = (container)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(rowContainerComp_default, {
            name: container,
            key: `${container}-container`
        });
    const createSection = ({ section, children, className, style })=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: section,
            className,
            role: "presentation",
            style
        }, children.map(createRowContainer));
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: rootClasses
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(gridHeaderComp_default, null), createSection({
        section: eTop,
        className: topClasses,
        style: topStyle,
        children: [
            "topLeft",
            "topCenter",
            "topRight",
            "topFullWidth"
        ]
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
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
var gridBodyComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(GridBodyComp);
;
;
var TabGuardCompRef = (props, forwardRef4)=>{
    const { children, eFocusableElement, onTabKeyDown, gridCtrl, forceFocusOutWhenTabGuardsAreEmpty, isEmpty } = props;
    const { context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const topTabGuardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomTabGuardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabGuardCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardRef4, ()=>({
            forceFocusOutOfContainer (up) {
                tabGuardCtrlRef.current?.forceFocusOutOfContainer(up);
            }
        }));
    const setupCtrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
            tabGuardCtrlRef.current = context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabGuardCtrl"]({
                comp: compProxy,
                eTopGuard: topTabGuard,
                eBottomGuard: bottomTabGuard,
                eFocusableElement,
                onTabKeyDown,
                forceFocusOutWhenTabGuardsAreEmpty,
                focusInnerElement: (fromBottom)=>gridCtrl.focusInnerElement(fromBottom),
                isEmpty
            }));
        }
    }, []);
    const setTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        topTabGuardRef.current = e;
        setupCtrl();
    }, [
        setupCtrl
    ]);
    const setBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        bottomTabGuardRef.current = e;
        setupCtrl();
    }, [
        setupCtrl
    ]);
    const createTabGuard = (side)=>{
        const className = side === "top" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabGuardClassNames"].TAB_GUARD_TOP : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabGuardClassNames"].TAB_GUARD_BOTTOM;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabGuardClassNames"].TAB_GUARD} ${className}`,
            role: "presentation",
            ref: side === "top" ? setTopRef : setBottomRef
        });
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, createTabGuard("top"), children, createTabGuard("bottom"));
};
var TabGuardComp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(TabGuardCompRef);
var tabGuardComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(TabGuardComp);
// packages/ag-grid-react/src/reactUi/gridComp.tsx
var GridComp = ({ context })=>{
    const [rtlClass, setRtlClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [layoutClass, setLayoutClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userSelect, setUserSelect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialised, setInitialised] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tabGuardReady, setTabGuardReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const gridCtrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eRootWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabGuardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [eGridBodyParent, setGridBodyParent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const focusInnerElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>void 0);
    const paginationCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const focusableContainersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const onTabKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>void 0, []);
    reactComment_default(" AG Grid ", eRootWrapperRef);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eRootWrapperRef.current = eRef;
        gridCtrlRef.current = eRef ? context.createBean(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridCtrl"]()) : context.destroyBean(gridCtrlRef.current);
        if (!eRef || context.isDestroyed()) {
            return;
        }
        const gridCtrl = gridCtrlRef.current;
        focusInnerElementRef.current = gridCtrl.focusInnerElement.bind(gridCtrl);
        const compProxy = {
            destroyGridUi: ()=>{},
            // do nothing, as framework users destroy grid by removing the comp
            setRtlClass,
            forceFocusOutOfContainer: (up)=>{
                if (!up && paginationCompRef.current?.isDisplayed()) {
                    paginationCompRef.current.forceFocusOutOfContainer(up);
                    return;
                }
                tabGuardRef.current?.forceFocusOutOfContainer(up);
            },
            updateLayoutClasses: setLayoutClass,
            getFocusableContainers: ()=>{
                const comps = [];
                const gridBodyCompEl = eRootWrapperRef.current?.querySelector(".ag-root");
                if (gridBodyCompEl) {
                    comps.push({
                        getGui: ()=>gridBodyCompEl
                    });
                }
                for (const comp of focusableContainersRef.current){
                    if (comp.isDisplayed()) {
                        comps.push(comp);
                    }
                }
                return comps;
            },
            setCursor,
            setUserSelect
        };
        gridCtrl.setComp(compProxy, eRef, eRef);
        setInitialised(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const addComponentToDom = (component)=>{
            const comp = context.createBean(new component());
            const eGui = comp.getGui();
            eRootWrapper.insertAdjacentElement("beforeend", eGui);
            additionalEls.push(eGui);
            beansToDestroy.push(comp);
            return comp;
        };
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
        return ()=>{
            context.destroyBeans(beansToDestroy);
            for (const el of additionalEls){
                el.remove();
            }
        };
    }, [
        tabGuardReady,
        eGridBodyParent,
        context
    ]);
    const rootWrapperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-root-wrapper", rtlClass, layoutClass), [
        rtlClass,
        layoutClass
    ]);
    const rootWrapperBodyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>classesList("ag-root-wrapper-body", "ag-focus-managed", layoutClass), [
        layoutClass
    ]);
    const topStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            userSelect: userSelect != null ? userSelect : "",
            WebkitUserSelect: userSelect != null ? userSelect : "",
            cursor: cursor != null ? cursor : ""
        }), [
        userSelect,
        cursor
    ]);
    const setTabGuardCompRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ref)=>{
        tabGuardRef.current = ref;
        setTabGuardReady(ref !== null);
    }, []);
    const isFocusable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>!gridCtrlRef.current?.isFocusable(), []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setRef2,
        className: rootWrapperClasses,
        style: topStyle,
        role: "presentation"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: rootWrapperBodyClasses,
        ref: setGridBodyParent,
        role: "presentation"
    }, initialised && eGridBodyParent && !context.isDestroyed() && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(BeansContext.Provider, {
        value: context.getBeans()
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(tabGuardComp_default, {
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
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(gridBodyComp_default, null)))));
};
var gridComp_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(GridComp);
;
var RenderStatusService = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BeanStub"] {
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
    const apiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eGui = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const portalManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const destroyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const whenReadyFuncs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const prevProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props);
    const frameworkOverridesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const gridIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const ready = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    const [, setPortalRefresher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const appliedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        updateClassName(props.className);
    }, [
        props.className
    ]);
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
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
            portalManager.current = new PortalManager(()=>setPortalRefresher((prev)=>prev + 1), props.componentWrappingElement, props.maxComponentCreationTimeMs);
            destroyFuncs.current.push(()=>{
                portalManager.current?.destroy();
                portalManager.current = null;
            });
        }
        const mergedGridOps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_combineAttributesAndGridOptions"])(props.gridOptions, props, Object.keys(props).filter((key)=>!excludeReactCompProps.has(key)));
        const processQueuedUpdates = ()=>{
            if (ready.current) {
                const getFn = ()=>frameworkOverridesRef.current?.shouldQueueUpdates() ? void 0 : whenReadyFuncs.current.shift();
                let fn = getFn();
                while(fn){
                    fn();
                    fn = getFn();
                }
            }
        };
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
        const createUiCallback = (ctx)=>{
            setContext(ctx);
            ctx.createBean(renderStatus);
            destroyFuncs.current.push(()=>{
                ctx.destroy();
            });
            ctx.getBean("ctrlsSvc").whenReady({
                addDestroyFunc: (func)=>{
                    destroyFuncs.current.push(func);
                }
            }, ()=>{
                if (ctx.isDestroyed()) {
                    return;
                }
                const api = apiRef.current;
                if (api) {
                    props.passGridApi?.(api);
                }
            });
        };
        const acceptChangesCallback = (context2)=>{
            context2.getBean("ctrlsSvc").whenReady({
                addDestroyFunc: (func)=>{
                    destroyFuncs.current.push(func);
                }
            }, ()=>{
                for (const f of whenReadyFuncs.current){
                    f();
                }
                whenReadyFuncs.current.length = 0;
                ready.current = true;
            });
        };
        const gridCoreCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridCoreCreator"]();
        mergedGridOps.gridId ?? (mergedGridOps.gridId = gridIdRef.current);
        apiRef.current = gridCoreCreator.create(eRef, mergedGridOps, createUiCallback, acceptChangesCallback, gridParams);
        destroyFuncs.current.push(()=>{
            apiRef.current = void 0;
        });
        if (apiRef.current) {
            gridIdRef.current = apiRef.current.getGridId();
        }
    }, []);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            height: "100%",
            ...props.containerStyle || {}
        };
    }, [
        props.containerStyle
    ]);
    const processWhenReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((func)=>{
        if (ready.current && !frameworkOverridesRef.current?.shouldQueueUpdates()) {
            func();
        } else {
            whenReadyFuncs.current.push(func);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const changes = extractGridPropertyChanges(prevProps.current, props);
        prevProps.current = props;
        processWhenReady(()=>{
            if (apiRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_processOnChange"])(changes, apiRef.current);
            }
        });
    }, [
        props
    ]);
    const renderMode = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getGridOption"])(props, "renderingMode") === "legacy" ? "legacy" : "default";
    return(// IMPORTANT! Don't set className here, we must use classList
    // imperatively to avoid removing classes set by the grid
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style,
        ref: setRef2
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(RenderModeContext.Provider, {
        value: renderMode
    }, context && !context.isDestroyed() ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(gridComp_default, {
        key: context.instanceId,
        context
    }) : null, portalManager.current?.getPortals() ?? null)));
};
function extractGridPropertyChanges(prevProps, nextProps) {
    const changes = {};
    for (const propKey of Object.keys(nextProps)){
        if (excludeReactCompProps.has(propKey)) {
            if (deprecatedReactCompProps.has(propKey)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_warn"])(274, {
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
var ReactFrameworkComponentWrapper = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseComponentWrapper"] {
    constructor(parent, gridOptions){
        super();
        this.parent = parent;
        this.gridOptions = gridOptions;
    }
    createWrapper(UserReactComponent, componentType) {
        const gridOptions = this.gridOptions;
        const reactiveCustomComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getGridOption"])(gridOptions, "reactiveCustomComponents");
        if (reactiveCustomComponents) {
            const getComponentClass = (propertyName)=>{
                switch(propertyName){
                    case "filter":
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getGridOption"])(gridOptions, "enableFilterHandlers") ? FilterDisplayComponentWrapper : FilterComponentWrapper;
                    case "floatingFilterComponent":
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getGridOption"])(gridOptions, "enableFilterHandlers") ? FloatingFilterDisplayComponentWrapper : FloatingFilterComponentWrapper;
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
var DetailCellRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const beans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BeansContext);
    const { registry, context, gos, rowModel } = beans;
    const [cssClasses, setCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [gridCssClasses, setGridCssClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new CssClasses());
    const [detailGridOptions, setDetailGridOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [detailRowData, setDetailRowData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const ctrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const eGuiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeObserverDestroyFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const parentModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_getGridRegisteredModules"])(props.api.getGridId(), detailGridOptions?.rowModelType ?? "clientSide"), [
        props
    ]);
    const topClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cssClasses.toString() + " ag-details-row", [
        cssClasses
    ]);
    const gridClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>gridCssClasses.toString() + " ag-details-grid", [
        gridCssClasses
    ]);
    if (ref) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
                refresh () {
                    return ctrlRef.current?.refresh() ?? false;
                }
            }));
    }
    if (props.template) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_warn"])(230);
    }
    const setRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((eRef)=>{
        eGuiRef.current = eRef;
        if (!eRef || context.isDestroyed()) {
            ctrlRef.current = context.destroyBean(ctrlRef.current);
            resizeObserverDestroyFunc.current?.();
            return;
        }
        const compProxy = {
            toggleCss: (name, on)=>setCssClasses((prev)=>prev.setClass(name, on)),
            toggleDetailGridCss: (name, on)=>setGridCssClasses((prev)=>prev.setClass(name, on)),
            setDetailGrid: (gridOptions)=>setDetailGridOptions(gridOptions),
            setRowData: (rowData)=>setDetailRowData(rowData),
            getGui: ()=>eGuiRef.current
        };
        const ctrl = registry.createDynamicBean("detailCellRendererCtrl", true);
        if (!ctrl) {
            return;
        }
        context.createBean(ctrl);
        ctrl.init(compProxy, props);
        ctrlRef.current = ctrl;
        if (gos.get("detailRowAutoHeight")) {
            const checkRowSizeFunc = ()=>{
                if (eGuiRef.current == null) {
                    return;
                }
                const clientHeight = eGuiRef.current.clientHeight;
                if (clientHeight != null && clientHeight > 0) {
                    const updateRowHeightFunc = ()=>{
                        props.node.setRowHeight(clientHeight);
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_isClientSideRowModel"])(gos, rowModel) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_isServerSideRowModel"])(gos, rowModel)) {
                            rowModel.onRowHeightChanged();
                        }
                    };
                    setTimeout(updateRowHeightFunc, 0);
                }
            };
            resizeObserverDestroyFunc.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_observeResize"])(beans, eRef, checkRowSizeFunc);
            checkRowSizeFunc();
        }
    }, []);
    const registerGridApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((api)=>{
        ctrlRef.current?.registerDetailWithMaster(api);
    }, []);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: topClassName,
        ref: setRef2
    }, detailGridOptions && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(AgGridReactUi, {
        className: gridClassName,
        ...detailGridOptions,
        modules: parentModules,
        rowData: detailRowData,
        passGridApi: registerGridApi
    }));
});
var ReactFrameworkOverrides = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ag$2d$grid$2d$community$40$35$2e$0$2e$1$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VanillaFrameworkOverrides"] {
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
var AgGridReact = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
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
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(AgGridReactUi, {
            ...this.props,
            passGridApi: this.setGridApi
        });
    }
};
;
function useGridCustomComponent(methods) {
    const { setMethods } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CustomContext);
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

};

//# sourceMappingURL=125c1_ag-grid-react_dist_package_index_esm_mjs_785eb6._.js.map