<template >
	<div :class="{'md-content' : shouldStyle}" v-html="$md.render(content)"></div>
</template>
<script>
export default {
	props: {
		content: {
			type: String,
			required: true
		},
		shouldStyle: {
			type: Boolean,
			default: true
		}
	}
};
</script>
<style>
/* 
 * The following styles are ported from Bulma's 'Content' component.
 * They provide a sane base set of styles for content converted from
 * Markdown to HTML.
 * For more information see: https://bulma.io/documentation/elements/content/
 */
.md-content li + li {
	margin-top: 0.25em;
}

.md-content p:not(:last-child),
.md-content dl:not(:last-child),
.md-content ol:not(:last-child),
.md-content ul:not(:last-child),
.md-content blockquote:not(:last-child),
.md-content pre:not(:last-child),
.md-content table:not(:last-child) {
	margin-bottom: 1em;
}

.md-content h1,
.md-content h2,
.md-content h3,
.md-content h4,
.md-content h5,
.md-content h6 {
	font-weight: 700;
	line-height: 1.125;
}

.md-content h1 {
	font-size: 2em;
	margin-bottom: 0.5em;
}

.md-content h1:not(:first-child) {
	margin-top: 1em;
}

.md-content h2 {
	font-size: 1.75em;
	margin-bottom: 0.5714em;
}

.md-content h2:not(:first-child) {
	margin-top: 1.1428em;
}

.md-content h3 {
	font-size: 1.5em;
	margin-bottom: 0.6666em;
}

.md-content h3:not(:first-child) {
	margin-top: 1.3333em;
}

.md-content h4 {
	font-size: 1.25em;
	margin-bottom: 0.8em;
}

.md-content h5 {
	font-size: 1.125em;
	margin-bottom: 0.8888em;
}

.md-content h6 {
	font-size: 1em;
	margin-bottom: 1em;
}

.md-content blockquote {
	/* background-color: whitesmoke; */
	border-left: 5px solid #dbdbdb;
	font-style: italic;
	padding: 1.25em 1.5em;
}

.md-content ol {
	list-style-position: outside;
	margin-left: 2em;
	margin-top: 1em;
}

.md-content ol:not([type]) {
	list-style-type: decimal;
}

.md-content ol:not([type]).is-lower-alpha {
	list-style-type: lower-alpha;
}

.md-content ol:not([type]).is-lower-roman {
	list-style-type: lower-roman;
}

.md-content ol:not([type]).is-upper-alpha {
	list-style-type: upper-alpha;
}

.md-content ol:not([type]).is-upper-roman {
	list-style-type: upper-roman;
}

.md-content ul {
	list-style: disc outside;
	margin-left: 2em;
	margin-top: 1em;
}

.md-content ul ul {
	list-style-type: circle;
	margin-top: 0.5em;
}

.md-content ul ul ul {
	list-style-type: square;
}

.md-content dd {
	margin-left: 2em;
}

.md-content figure {
	margin-left: 2em;
	margin-right: 2em;
	text-align: center;
}

.md-content figure:not(:first-child) {
	margin-top: 2em;
}

.md-content figure:not(:last-child) {
	margin-bottom: 2em;
}

.md-content figure img {
	display: inline-block;
}

.md-content figure figcaption {
	font-style: italic;
}

.md-content pre {
	-webkit-overflow-scrolling: touch;
	overflow-x: auto;
	padding: 1.25em 1.5em;
	white-space: pre;
	word-wrap: normal;
}

.md-content sup,
.md-content sub {
	font-size: 75%;
}

.md-content table {
	width: 100%;
}

.md-content table td,
.md-content table th {
	border: 1px solid #dbdbdb;
	border-width: 0 0 1px;
	padding: 0.5em 0.75em;
	vertical-align: top;
}

.md-content table th {
	color: #363636;
}

.md-content table th:not([align]) {
	text-align: left;
}

.md-content table thead td,
.md-content table thead th {
	border-width: 0 0 2px;
	color: #363636;
}

.md-content table tfoot td,
.md-content table tfoot th {
	border-width: 2px 0 0;
	color: #363636;
}

.md-content table tbody tr:last-child td,
.md-content table tbody tr:last-child th {
	border-bottom-width: 0;
}

.md-content .tabs li + li {
	margin-top: 0;
}

.md-content.is-small {
	font-size: 0.75rem;
}

.md-content.is-medium {
	font-size: 1.25rem;
}

.md-content.is-large {
	font-size: 1.5rem;
}
</style>