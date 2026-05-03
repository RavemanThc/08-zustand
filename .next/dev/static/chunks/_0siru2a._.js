(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Modal/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__sR2AWG__backdrop",
  "modal": "Modal-module__sR2AWG__modal",
});
}),
"[project]/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "9baf95997ed5989a59e30070c2b4412134364e91cfb42a5ad1311fc47e7f989d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9baf95997ed5989a59e30070c2b4412134364e91cfb42a5ad1311fc47e7f989d";
    }
    const { children, onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_ModalUseEffect, t1);
    let t2;
    let t3;
    if ($[2] !== onClose) {
        t2 = ({
            "Modal[useEffect()]": ()=>{
                const handler = {
                    "Modal[useEffect() > handler]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["Modal[useEffect() > handler]"];
                window.addEventListener("keydown", handler);
                return ()=>window.removeEventListener("keydown", handler);
            }
        })["Modal[useEffect()]"];
        t3 = [
            onClose
        ];
        $[2] = onClose;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== onClose) {
        t4 = ({
            "Modal[handleBackdropClick]": ()=>{
                onClose();
            }
        })["Modal[handleBackdropClick]"];
        $[5] = onClose;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleBackdropClick = t4;
    const stopPropagation = _ModalStopPropagation;
    let t5;
    if ($[7] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            onClick: stopPropagation,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== handleBackdropClick || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
            onClick: handleBackdropClick,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 80,
            columnNumber: 23
        }, this), document.body);
        $[9] = handleBackdropClick;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(Modal, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = Modal;
function _ModalStopPropagation(e_0) {
    e_0.stopPropagation();
}
function _ModalUseEffect() {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return ()=>{
        document.body.style.overflow = originalOverflow;
    };
}
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "getTags",
    ()=>getTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZsYWQuZ2Fya3VzaGExOTk5QGdtYWkuY29tIiwiaWF0IjoxNzc3NzQzMjM2fQ.x60Gt-CslXhyvr5GwHW9b6G9DTbLXe3nIw1NvfIEnOo");
const instance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
});
const fetchNotes = async (search = "", page = 1, tag)=>{
    const normalizedTag = tag === "all" ? "" : tag;
    const { data } = await instance.get("/notes", {
        params: {
            page,
            perPage: 12,
            search,
            tag: normalizedTag || undefined
        }
    });
    return data;
};
const fetchNoteById = async (id)=>{
    const { data } = await instance.get(`/notes/${id}`);
    return data;
};
const createNote = async (note)=>{
    const { data } = await instance.post("/notes", note);
    return data;
};
const deleteNote = async (id)=>{
    const { data } = await instance.delete(`/notes/${id}`);
    return data;
};
const getTags = async ()=>{
    const { data } = await instance.get("/categories");
    return data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NotePreview(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "2a17c46ce2035e0870fd74a05e46987bdf0408cee93138f9d646963559f0aefd") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a17c46ce2035e0870fd74a05e46987bdf0408cee93138f9d646963559f0aefd";
    }
    const { id } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== id) {
        t1 = {
            queryKey: [
                "note",
                id
            ],
            queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNoteById"])(id),
            refetchOnMount: false
        };
        $[1] = id;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { data: note, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t1);
    if (isLoading) {
        let t2;
        if ($[3] !== router) {
            t2 = ({
                "NotePreview[<Modal>.onClose]": ()=>router.back()
            })["NotePreview[<Modal>.onClose]"];
            $[3] = router;
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                lineNumber: 50,
                columnNumber: 12
            }, this);
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        let t4;
        if ($[6] !== t2) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: t2,
                children: t3
            }, void 0, false, {
                fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                lineNumber: 57,
                columnNumber: 12
            }, this);
            $[6] = t2;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    if (isError || !note) {
        let t2;
        if ($[8] !== router) {
            t2 = ({
                "NotePreview[<Modal>.onClose]": ()=>router.back()
            })["NotePreview[<Modal>.onClose]"];
            $[8] = router;
            $[9] = t2;
        } else {
            t2 = $[9];
        }
        let t3;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Error loading note"
            }, void 0, false, {
                fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                lineNumber: 78,
                columnNumber: 12
            }, this);
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        let t4;
        if ($[11] !== t2) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: t2,
                children: t3
            }, void 0, false, {
                fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
                lineNumber: 85,
                columnNumber: 12
            }, this);
            $[11] = t2;
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        return t4;
    }
    let t2;
    if ($[13] !== router) {
        t2 = ({
            "NotePreview[<Modal>.onClose]": ()=>router.back()
        })["NotePreview[<Modal>.onClose]"];
        $[13] = router;
        $[14] = t2;
    } else {
        t2 = $[14];
    }
    let t3;
    if ($[15] !== note.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: note.title
        }, void 0, false, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[15] = note.title;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== note.content) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: note.content
        }, void 0, false, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[17] = note.content;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Tag:"
        }, void 0, false, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== note.tag) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t5,
                " ",
                note.tag
            ]
        }, void 0, true, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[20] = note.tag;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Created:"
        }, void 0, false, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== note.createdAt) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t7,
                " ",
                note.createdAt
            ]
        }, void 0, true, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[23] = note.createdAt;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== t2 || $[26] !== t3 || $[27] !== t4 || $[28] !== t6 || $[29] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: t2,
            children: [
                t3,
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/@modal/(.)notes/[id]/NotePreview.client.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[25] = t2;
        $[26] = t3;
        $[27] = t4;
        $[28] = t6;
        $[29] = t8;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    return t9;
}
_s(NotePreview, "kzBWr7tqoxsfdjoJO6vxYCcnlB0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NotePreview;
var _c;
__turbopack_context__.k.register(_c, "NotePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0siru2a._.js.map