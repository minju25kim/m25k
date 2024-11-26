+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

<!-- 
$ hugo new --kind engkor content/engkor/$(date +%Y-%m-%d-%a).md
$ hugo new --kind engkor content/engkor/title_you_want.md
-->