# Help
.SILENT:
.PHONY: help

help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev: ## Start live development platfomr
	bundle exec jekyll serve --future --open-url --livereload --limit_posts 10

comments: ## Create missing issues for comments
	node _scripts/create-comment-issue.js

publish:
	git push
	make comments
