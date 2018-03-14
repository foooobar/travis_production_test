{
    "package": {
        "name": "auto-upload",
        "repo": "myRepo",
        "subject": "myBintrayUser",
        "desc": "I was pushed completely automatically",
        "website_url": "www.jfrog.com",
        "issue_tracker_url": "https://github.com/bintray/bintray-client-java/issues",
        "vcs_url": "https://github.com/bintray/bintray-client-java.git",
        "github_use_tag_release_notes": true,
        "github_release_notes_file": "RELEASE.txt",
        "licenses": ["MIT"],
        "labels": ["cool", "awesome", "gorilla"],
        "public_download_numbers": false,
        "public_stats": false,
        "attributes": [{"name": "att1", "values" : ["val1"], "type": "string"},
                       {"name": "att2", "values" : [1, 2.2, 4], "type": "number"},
                       {"name": "att5", "values" : ["2014-12-28T19:43:37+0100"], "type": "date"}]
    },

    "version": {
        "name": "0.5",
        "desc": "This is a version",
        "released": "2015-01-04",
        "vcs_tag": "0.5",
        "attributes": [{"name": "VerAtt1", "values" : ["VerVal1"], "type": "string"},
                       {"name": "VerAtt2", "values" : [1, 3.3, 5], "type": "number"},
                       {"name": "VerAtt3", "values" : ["2015-01-01T19:43:37+0100"], "type": "date"}],
        "gpgSign": false
    },

    "files":
        [
        {"includePattern": "build/bin(.*)*/(.*\\.gem)", "excludePattern": ".*/do-not-deploy/.*", "uploadPattern": "gems/$2"},
        {"includePattern": "build/docs/(.*)", "uploadPattern": "docs/$1"}
        ],
    "publish": true
}