;;; start-server.el --- helpers to start server / repl

;; start server in current directory
(httpd-serve-directory default-directory)

;; start a browser connected repl
(skewer-repl)
