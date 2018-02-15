# Help
.SILENT:
.PHONY: help

help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev: ## Start live development platfomr
	open http://localhost:4000
	bundle exec jekyll serve

comments: ## Create missing issues for comments
	node _scripts/create-comment-issue.js


