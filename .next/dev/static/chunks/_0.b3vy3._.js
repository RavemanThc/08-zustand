(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/NoteList/NoteList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "NoteList-module__LCs_aq__button",
  "content": "NoteList-module__LCs_aq__content",
  "footer": "NoteList-module__LCs_aq__footer",
  "link": "NoteList-module__LCs_aq__link",
  "list": "NoteList-module__LCs_aq__list",
  "listItem": "NoteList-module__LCs_aq__listItem",
  "tag": "NoteList-module__LCs_aq__tag",
  "title": "NoteList-module__LCs_aq__title",
});
}),
"[project]/components/NoteList/NoteList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NoteList/NoteList.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NoteList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "8b2932dca6e201d7f84a3129e9c112ec39e153229eb8956f048499a223359656") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b2932dca6e201d7f84a3129e9c112ec39e153229eb8956f048499a223359656";
    }
    const { notes } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t1;
    if ($[1] !== queryClient) {
        t1 = {
            mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNote"],
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "notes"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t1);
    if (!notes || notes.length === 0) {
        return null;
    }
    let t2;
    if ($[3] !== mutation || $[4] !== notes) {
        let t3;
        if ($[6] !== mutation) {
            t3 = ({
                "NoteList[notes.map()]": (note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: note.title
                            }, void 0, false, {
                                fileName: "[project]/components/NoteList/NoteList.tsx",
                                lineNumber: 49,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                children: note.content
                            }, void 0, false, {
                                fileName: "[project]/components/NoteList/NoteList.tsx",
                                lineNumber: 49,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                        children: note.tag
                                    }, void 0, false, {
                                        fileName: "[project]/components/NoteList/NoteList.tsx",
                                        lineNumber: 49,
                                        columnNumber: 201
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/notes/${note.id}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                        children: "View details"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NoteList/NoteList.tsx",
                                        lineNumber: 49,
                                        columnNumber: 244
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                        onClick: {
                                            "NoteList[notes.map() > <button>.onClick]": ()=>mutation.mutate(note.id)
                                        }["NoteList[notes.map() > <button>.onClick]"],
                                        disabled: mutation.isPending,
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NoteList/NoteList.tsx",
                                        lineNumber: 49,
                                        columnNumber: 320
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NoteList/NoteList.tsx",
                                lineNumber: 49,
                                columnNumber: 173
                            }, this)
                        ]
                    }, note.id, true, {
                        fileName: "[project]/components/NoteList/NoteList.tsx",
                        lineNumber: 49,
                        columnNumber: 42
                    }, this)
            })["NoteList[notes.map()]"];
            $[6] = mutation;
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        t2 = notes.map(t3);
        $[3] = mutation;
        $[4] = notes;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/NoteList/NoteList.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s(NoteList, "mUUakYvFQSudGRmMzZErOI9nuuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteList;
var _c;
__turbopack_context__.k.register(_c, "NoteList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchBox/SearchBox.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "SearchBox-module__izN5UG__input",
});
}),
"[project]/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SearchBox/SearchBox.module.css [app-client] (css module)");
"use client";
;
;
;
function SearchBox(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "52c176bb49d755677dfa7d6d4ac91fe34ed8e91ca7193eda27beea21176040bf") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52c176bb49d755677dfa7d6d4ac91fe34ed8e91ca7193eda27beea21176040bf";
    }
    const { value, onChange } = t0;
    const t1 = value ?? "";
    let t2;
    if ($[1] !== onChange) {
        t2 = ({
            "SearchBox[<input>.onChange]": (e)=>onChange(e.target.value)
        })["SearchBox[<input>.onChange]"];
        $[1] = onChange;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
            type: "text",
            placeholder: "Search notes",
            value: t1,
            onChange: t2
        }, void 0, false, {
            fileName: "[project]/components/SearchBox/SearchBox.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = SearchBox;
var _c;
__turbopack_context__.k.register(_c, "SearchBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Pagination/Pagination.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Pagination-module__QyWOzW__active",
  "pagination": "Pagination-module__QyWOzW__pagination",
});
}),
"[project]/components/Pagination/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Pagination/Pagination.module.css [app-client] (css module)");
"use client";
;
;
;
;
function Pagination(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "59a37180512e8cbebe5c9780a9da42c4d079c33bee2ac2da48ce85ec89d58f22") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "59a37180512e8cbebe5c9780a9da42c4d079c33bee2ac2da48ce85ec89d58f22";
    }
    const { pageCount, onPageChange, currentPage } = t0;
    let t1;
    if ($[1] !== onPageChange) {
        t1 = ({
            "Pagination[handlePageChange]": (event)=>{
                onPageChange(event.selected + 1);
            }
        })["Pagination[handlePageChange]"];
        $[1] = onPageChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handlePageChange = t1;
    const t2 = currentPage - 1;
    let t3;
    if ($[3] !== handlePageChange || $[4] !== pageCount || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
            pageCount: pageCount,
            onPageChange: handlePageChange,
            forcePage: t2,
            previousLabel: "Prev",
            nextLabel: "Next",
            activeClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active
        }, void 0, false, {
            fileName: "[project]/components/Pagination/Pagination.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = handlePageChange;
        $[4] = pageCount;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/notes/filter/[...slug]/Notes.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "app": "Notes-module__lx6Ika__app",
  "button": "Notes-module__lx6Ika__button",
  "toolbar": "Notes-module__lx6Ika__toolbar",
});
}),
"[project]/app/notes/filter/[...slug]/Notes.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NoteList/NoteList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Pagination/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/filter/[...slug]/Notes.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function NotesClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "3367d9c2d1e47eb8a1ec8a74de3764b72c886238bf691bc82d6fc30ff396f7ff") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3367d9c2d1e47eb8a1ec8a74de3764b72c886238bf691bc82d6fc30ff396f7ff";
    }
    const { tag } = t0;
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "NotesClient[useDebouncedCallback()]": (value)=>{
                setSearch(value);
                setPage(1);
            }
        })["NotesClient[useDebouncedCallback()]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])(t1, 500);
    let t2;
    if ($[2] !== page || $[3] !== search || $[4] !== tag) {
        t2 = {
            queryKey: [
                "notes",
                tag,
                page,
                search
            ],
            queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNotes"])(search, page, tag),
            placeholderData: _temp
        };
        $[2] = page;
        $[3] = search;
        $[4] = tag;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const { data: t3, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t2);
    let t4;
    if ($[6] !== t3) {
        t4 = t3 === undefined ? {
            notes: [],
            totalPages: 0
        } : t3;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const data = t4;
    let t5;
    if ($[8] !== queryClient) {
        t5 = {
            mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNote"],
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "notes"
                    ]
                });
            }
        };
        $[8] = queryClient;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t5);
    if (isLoading) {
        let t6;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading, please wait..."
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, this);
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        return t6;
    }
    if (error) {
        let t6;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Could not fetch the list of notes."
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
                lineNumber: 104,
                columnNumber: 12
            }, this);
            $[11] = t6;
        } else {
            t6 = $[11];
        }
        return t6;
    }
    let t6;
    if ($[12] !== debouncedSearch || $[13] !== search) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: search,
            onChange: debouncedSearch
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[12] = debouncedSearch;
        $[13] = search;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== data.totalPages || $[16] !== page) {
        t7 = data.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            currentPage: page,
            pageCount: data.totalPages,
            onPageChange: setPage
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 122,
            columnNumber: 33
        }, this);
        $[15] = data.totalPages;
        $[16] = page;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/notes/action/create",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            children: "Create note +"
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[19] = t6;
        $[20] = t7;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== data.notes || $[23] !== deleteMutation) {
        t10 = data.notes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            notes: data.notes,
            onDelete: deleteMutation.mutate
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 147,
            columnNumber: 36
        }, this);
        $[22] = data.notes;
        $[23] = deleteMutation;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10 || $[26] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].app,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t9;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    return t11;
}
_s(NotesClient, "QOJuzAbPPB2cHxJ/+0U6tR4ArRE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NotesClient;
function _temp(prev) {
    return prev;
}
var _c;
__turbopack_context__.k.register(_c, "NotesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0.b3vy3._.js.map