


export const prebuiltRuleAlertsResponse = {
  "events": [
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "malware",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "memory_signature",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "b9623ec1-bbab-4d2c-9e4e-3a523f1b7b9e",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "malware",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "malware event with process iexlorer.exe, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "memory_signature",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "WnXXEYIBRKQBoH3JXndW",
          "type": "event"
        }
      ],
      "Memory_protection": {
        "feature": "signature",
        "self_injection": true
      },
      "kibana.alert.original_event.dataset": "endpoint",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "event.sequence": 610,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {},
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "malware_signature": {
            "identifier": "diagnostic-malware-signature-v1-fake",
            "all_names": "Windows.Trojan.FakeAgent"
          },
          "ancestry": [
            "1jx51k3ycb",
            "3ckuzyk9ei"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "1jx51k3ycb"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 849,
          "entity_id": "ah4nfw1r7k"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 369,
          "entity_id": "ah4nfw1r7k"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 125,
          "entity_id": "ah4nfw1r7k"
        },
        "name": "iexlorer.exe",
        "start": 1658158926265,
        "pid": 2,
        "entity_id": "fur1qcerz4",
        "executable": "C:/fake/iexlorer.exe",
        "hash": {
          "sha1": "fake sha1",
          "sha256": "fake sha256",
          "md5": "fake md5"
        },
        "uptime": 0
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 610,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "start",
      "@timestamp": "2022-07-18T15:08:48.063Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "start",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "ef7fcd81ddfa218aa5e5cd1d4e80fb07fed5806489f26084d759fb42e4e2f25c",
      "kibana.version": "8.4.0",
      "event.id": "b9623ec1-bbab-4d2c-9e4e-3a523f1b7b9e",
      "event.dataset": "endpoint",
      "kibana.alert.original_time": "2022-07-18T15:42:06.265Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "behavior",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "behavior",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "source": {
        "port": 59406,
        "ip": "10.13.177.247"
      },
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "0ea9b324-7bb6-4512-85c7-ac4ab7cd8080",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "behavior",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "behavior event with process notepad.exe, file fake_behavior.exe,:59406,:443, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "behavior",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "destination": {
        "port": 443,
        "ip": "10.232.197.71"
      },
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "hHXXEYIBRKQBoH3JXnVV",
          "type": "event"
        }
      ],
      "rule": {
        "description": "Behavior rule description",
        "id": "252955d3-a777-431d-a015-d4a70e2b68bc"
      },
      "kibana.alert.original_event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "network": {
        "transport": "tcp",
        "type": "ipv4",
        "direction": "outgoing"
      },
      "event.sequence": 140,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {
        "path": "C:/fake_behavior.exe",
        "name": "fake_behavior.exe"
      },
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "registry": {
        "path": "HKEY_USERS\\S-1-5-21-2460036010-3910878774-3458087990-1001\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\chrome",
        "data": {
          "strings": "C:/fake_behavior/notepad.exe"
        },
        "value": "notepad.exe"
      },
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "ancestry": [
            "kdtntqj9es",
            "yno4ha0v7c"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high",
            "elevation_level": "full"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "kdtntqj9es"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 5,
          "entity_id": "76xj16xt4f"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 291,
          "entity_id": "76xj16xt4f"
        },
        "code_signature": {
          "subject_name": "Microsoft Windows",
          "status": "trusted"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 202,
          "entity_id": "76xj16xt4f"
        },
        "name": "notepad.exe",
        "pid": 2,
        "entity_id": "ebdnts2ebu",
        "executable": "C:/fake_behavior/notepad.exe"
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 140,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "rule_detection",
      "@timestamp": "2022-07-18T15:08:48.063Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "rule_detection",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "5f0b38ac1b3652867f73b688b8186b4e7803a9dd2fcf916744afb7381e58d015",
      "kibana.version": "8.4.0",
      "event.id": "0ea9b324-7bb6-4512-85c7-ac4ab7cd8080",
      "event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.original_time": "2022-07-18T15:47:37.258Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "malware",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "shellcode_thread",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "d0bf61e0-94b6-4cdd-8a17-11ea0d440961",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "malware",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "malware event with process explorer.exe, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "shellcode_thread",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "8nXXEYIBRKQBoH3JXnVV",
          "type": "event"
        }
      ],
      "Memory_protection": {
        "feature": "shellcode_thread",
        "self_injection": true
      },
      "kibana.alert.original_event.dataset": "endpoint",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "event.sequence": 250,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "Target": {
        "process": {
          "thread": {
            "Ext": {
              "start_address_details": {
                "region_size": 4000,
                "region_protection": "RWX",
                "allocation_type": "PRIVATE",
                "memory_pe": {
                  "imphash": "a hash"
                },
                "allocation_size": 4000
              },
              "start_address_bytes_disasm_hash": "a disam hash",
              "start_address_allocation_offset": 0
            }
          }
        }
      },
      "file": {},
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "malware_signature": {
            "identifier": "diagnostic-malware-signature-v1-fake",
            "all_names": "Windows.Trojan.FakeAgent"
          },
          "ancestry": [
            "9mdj855xum",
            "1kmjaboxkt"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "9mdj855xum"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 64,
          "entity_id": "7vrnkjm397"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 30,
          "entity_id": "7vrnkjm397"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 727,
          "entity_id": "7vrnkjm397"
        },
        "name": "explorer.exe",
        "start": 1658159275261,
        "pid": 2,
        "entity_id": "urrnlvmn1n",
        "executable": "C:/fake/explorer.exe",
        "hash": {
          "sha1": "fake sha1",
          "sha256": "fake sha256",
          "md5": "fake md5"
        },
        "uptime": 0
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 250,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "start",
      "@timestamp": "2022-07-18T15:08:48.063Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "start",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "0b37e801e62dea3f145ff9308ea56a34c4a0a3c2398d5cf52911629597514e96",
      "kibana.version": "8.4.0",
      "event.id": "d0bf61e0-94b6-4cdd-8a17-11ea0d440961",
      "event.dataset": "endpoint",
      "kibana.alert.original_time": "2022-07-18T15:47:55.261Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "malware",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "malicious_file",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.4.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "1b63fd23-74ec-4f27-88a4-c3da8411958d",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "malware",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "malware event with process malware writer, file fake_malware.exe, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "malicious_file",
      "kibana.alert.original_event.type": "creation",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "DnXXEYIBRKQBoH3JXndW",
          "type": "event"
        }
      ],
      "kibana.alert.original_event.dataset": "endpoint",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "event.sequence": 534,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {
        "owner": "SYSTEM",
        "Ext": {
          "temp_file_path": "C:/temp/fake_malware.exe",
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "quarantine_message": "fake quarantine message",
          "quarantine_result": true,
          "malware_classification": {
            "identifier": "endpointpe",
            "score": 1,
            "threshold": 0.66,
            "version": "3.0.33"
          }
        },
        "path": "C:/fake_malware.exe",
        "size": 3456,
        "created": 1658159281265,
        "name": "fake_malware.exe",
        "accessed": 1658159281265,
        "mtime": 1658159281265,
        "hash": {
          "sha1": "fake file sha1",
          "sha256": "fake file sha256",
          "md5": "fake file md5"
        }
      },
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "ancestry": [
            "oap1xvrjpd",
            "s4f3nnx6d1"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level": 16384,
            "privileges": [
              {
                "name": "SeAssignPrimaryTokenPrivilege",
                "description": "Replace a process level token",
                "enabled": false
              }
            ],
            "integrity_level_name": "system",
            "domain": "NT AUTHORITY",
            "type": "tokenPrimary",
            "user": "SYSTEM",
            "sid": "S-1-5-18"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "oap1xvrjpd"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 532,
          "entity_id": "ah4nfw1r7k"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 935,
          "entity_id": "ah4nfw1r7k"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 510,
          "entity_id": "ah4nfw1r7k"
        },
        "name": "malware writer",
        "start": 1658159281265,
        "pid": 2,
        "entity_id": "1cl70y16ka",
        "executable": "C:/malware.exe",
        "hash": {
          "sha1": "fake sha1",
          "sha256": "fake sha256",
          "md5": "fake md5"
        },
        "uptime": 0
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 534,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "deletion",
      "@timestamp": "2022-07-18T15:08:48.064Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "deletion",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "creation",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "245b782b0be20d2e0bad3b230c692e44a4454b3bc6cde7cca5216af8d2b76c24",
      "kibana.version": "8.4.0",
      "event.id": "1b63fd23-74ec-4f27-88a4-c3da8411958d",
      "event.dataset": "endpoint",
      "kibana.alert.original_time": "2022-07-18T15:48:01.265Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "malware",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "malicious_file",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.4.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "acd7d638-778f-4e63-9af8-ae919ccb5dbc",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "malware",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "malware event with process malware writer, file fake_malware.exe, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "malicious_file",
      "kibana.alert.original_event.type": "creation",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "qXXXEYIBRKQBoH3JXnZW",
          "type": "event"
        }
      ],
      "kibana.alert.original_event.dataset": "endpoint",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "event.sequence": 433,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {
        "owner": "SYSTEM",
        "Ext": {
          "temp_file_path": "C:/temp/fake_malware.exe",
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "quarantine_message": "fake quarantine message",
          "quarantine_result": true,
          "malware_classification": {
            "identifier": "endpointpe",
            "score": 1,
            "threshold": 0.66,
            "version": "3.0.33"
          }
        },
        "path": "C:/fake_malware.exe",
        "size": 3456,
        "created": 1658159293264,
        "name": "fake_malware.exe",
        "accessed": 1658159293264,
        "mtime": 1658159293264,
        "hash": {
          "sha1": "fake file sha1",
          "sha256": "fake file sha256",
          "md5": "fake file md5"
        }
      },
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "ancestry": [
            "1xcca9dpu5",
            "q2e9bxeoex"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level": 16384,
            "privileges": [
              {
                "name": "SeAssignPrimaryTokenPrivilege",
                "description": "Replace a process level token",
                "enabled": false
              }
            ],
            "integrity_level_name": "system",
            "domain": "NT AUTHORITY",
            "type": "tokenPrimary",
            "user": "SYSTEM",
            "sid": "S-1-5-18"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "1xcca9dpu5"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 369,
          "entity_id": "xffdpn017z"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 63,
          "entity_id": "xffdpn017z"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 392,
          "entity_id": "xffdpn017z"
        },
        "name": "malware writer",
        "start": 1658159293264,
        "pid": 2,
        "entity_id": "5si3vtl7f5",
        "executable": "C:/malware.exe",
        "hash": {
          "sha1": "fake sha1",
          "sha256": "fake sha256",
          "md5": "fake md5"
        },
        "uptime": 0
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 433,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "creation",
      "@timestamp": "2022-07-18T15:08:48.064Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "creation",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "creation",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "bdb9e76269b9d541ef83724974313a41b2ccc9e057c54ddbcdf56c3a3ec9b076",
      "kibana.version": "8.4.0",
      "event.id": "acd7d638-778f-4e63-9af8-ae919ccb5dbc",
      "event.dataset": "endpoint",
      "kibana.alert.original_time": "2022-07-18T15:48:13.264Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "behavior",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "behavior",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "source": {
        "port": 59406,
        "ip": "10.196.88.41"
      },
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "30d9cd79-a388-4bec-bc4e-edd529d7f8c7",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "behavior",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "behavior event with process mimikatz.exe, file fake_behavior.exe,:59406,:443, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "behavior",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "destination": {
        "port": 443,
        "ip": "10.35.239.147"
      },
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "RHXXEYIBRKQBoH3JXnZV",
          "type": "event"
        }
      ],
      "rule": {
        "description": "Behavior rule description",
        "id": "2a90fbfc-8fba-4d29-baf8-d92d71b74c06"
      },
      "kibana.alert.original_event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "network": {
        "transport": "tcp",
        "type": "ipv4",
        "direction": "outgoing"
      },
      "event.sequence": 332,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {
        "path": "C:/fake_behavior.exe",
        "name": "fake_behavior.exe"
      },
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "registry": {
        "path": "HKEY_USERS\\S-1-5-21-2460036010-3910878774-3458087990-1001\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\chrome",
        "data": {
          "strings": "C:/fake_behavior/mimikatz.exe"
        },
        "value": "mimikatz.exe"
      },
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "ancestry": [
            "tjgw33zj1b"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high",
            "elevation_level": "full"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "tjgw33zj1b"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 641,
          "entity_id": "tjgw33zj1b"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 927,
          "entity_id": "tjgw33zj1b"
        },
        "code_signature": {
          "subject_name": "Microsoft Windows",
          "status": "trusted"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 948,
          "entity_id": "tjgw33zj1b"
        },
        "name": "mimikatz.exe",
        "pid": 2,
        "entity_id": "rnvpx8wrfo",
        "executable": "C:/fake_behavior/mimikatz.exe"
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 332,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "rule_detection",
      "@timestamp": "2022-07-18T15:08:48.064Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "rule_detection",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "ccfbc0d32551137e86c816025670ce52b5bc48efde7f619b48bba02da884fac8",
      "kibana.version": "8.4.0",
      "event.id": "30d9cd79-a388-4bec-bc4e-edd529d7f8c7",
      "event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.original_time": "2022-07-18T15:51:13.263Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "malware",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "memory_signature",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "edab4def-d175-474f-bac6-df422eeeeaa0",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "malware",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "malware event with process iexlorer.exe, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "memory_signature",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "AXXXEYIBRKQBoH3JXnVV",
          "type": "event"
        }
      ],
      "Memory_protection": {
        "feature": "signature",
        "self_injection": true
      },
      "kibana.alert.original_event.dataset": "endpoint",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "event.sequence": 9,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {},
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "malware_signature": {
            "identifier": "diagnostic-malware-signature-v1-fake",
            "all_names": "Windows.Trojan.FakeAgent"
          },
          "ancestry": [],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high"
          }
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 204,
          "entity_id": "rcjx6qalkt"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 898,
          "entity_id": "rcjx6qalkt"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 247,
          "entity_id": "rcjx6qalkt"
        },
        "name": "iexlorer.exe",
        "start": 1658159689251,
        "pid": 2,
        "entity_id": "rcjx6qalkt",
        "executable": "C:/fake/iexlorer.exe",
        "hash": {
          "sha1": "fake sha1",
          "sha256": "fake sha256",
          "md5": "fake md5"
        },
        "uptime": 0
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 9,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "start",
      "@timestamp": "2022-07-18T15:08:48.064Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "start",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "3b748dac2b98c0c0ae7a849d036d78207173fa5c514e717f0a6fda6290689f75",
      "kibana.version": "8.4.0",
      "event.id": "edab4def-d175-474f-bac6-df422eeeeaa0",
      "event.dataset": "endpoint",
      "kibana.alert.original_time": "2022-07-18T15:54:49.251Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "malware",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "memory_signature",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "eea8511d-7dcd-4e18-aede-9850ca8873c1",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "malware",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "malware event with process notepad.exe, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "memory_signature",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "NXXXEYIBRKQBoH3JXnVV",
          "type": "event"
        }
      ],
      "Memory_protection": {
        "feature": "signature",
        "self_injection": true
      },
      "kibana.alert.original_event.dataset": "endpoint",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "event.sequence": 61,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {},
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "malware_signature": {
            "identifier": "diagnostic-malware-signature-v1-fake",
            "all_names": "Windows.Trojan.FakeAgent"
          },
          "ancestry": [
            "9pn3h229yo",
            "p4vhozscnl"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "9pn3h229yo"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 180,
          "entity_id": "rcjx6qalkt"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 731,
          "entity_id": "rcjx6qalkt"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 538,
          "entity_id": "rcjx6qalkt"
        },
        "name": "notepad.exe",
        "start": 1658160062251,
        "pid": 2,
        "entity_id": "vm1uiebh2c",
        "executable": "C:/fake/notepad.exe",
        "hash": {
          "sha1": "fake sha1",
          "sha256": "fake sha256",
          "md5": "fake md5"
        },
        "uptime": 0
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 61,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "start",
      "@timestamp": "2022-07-18T15:08:48.065Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "start",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "516168d06ae19a982f39b736c8f05b9304dc550ad69732cd432427907a057925",
      "kibana.version": "8.4.0",
      "event.id": "eea8511d-7dcd-4e18-aede-9850ca8873c1",
      "event.dataset": "endpoint",
      "kibana.alert.original_time": "2022-07-18T16:01:02.251Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "behavior",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "behavior",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "source": {
        "port": 59406,
        "ip": "10.11.237.178"
      },
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "550ea209-f20d-44dd-9e91-79a28c5f41a9",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "behavior",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "behavior event with process powershell.exe, file fake_behavior.exe,:59406,:443, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "behavior",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "destination": {
        "port": 443,
        "ip": "10.42.124.0"
      },
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "G3XXEYIBRKQBoH3JXnVV",
          "type": "event"
        }
      ],
      "rule": {
        "description": "Behavior rule description",
        "id": "5fef0a22-9cfe-484c-b159-0d7f040e189a"
      },
      "kibana.alert.original_event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "network": {
        "transport": "tcp",
        "type": "ipv4",
        "direction": "outgoing"
      },
      "event.sequence": 35,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {
        "path": "C:/fake_behavior.exe",
        "name": "fake_behavior.exe"
      },
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "registry": {
        "path": "HKEY_USERS\\S-1-5-21-2460036010-3910878774-3458087990-1001\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\chrome",
        "data": {
          "strings": "C:/fake_behavior/powershell.exe"
        },
        "value": "powershell.exe"
      },
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "ancestry": [
            "gvnad391wa",
            "9pn3h229yo"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high",
            "elevation_level": "full"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "gvnad391wa"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 599,
          "entity_id": "rcjx6qalkt"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 323,
          "entity_id": "rcjx6qalkt"
        },
        "code_signature": {
          "subject_name": "Microsoft Windows",
          "status": "trusted"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 284,
          "entity_id": "rcjx6qalkt"
        },
        "name": "powershell.exe",
        "pid": 2,
        "entity_id": "bcz9bx3din",
        "executable": "C:/fake_behavior/powershell.exe"
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 35,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "rule_detection",
      "@timestamp": "2022-07-18T15:08:48.065Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "rule_detection",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "59e2a69855a739de7fa7ac0c530d132994ed84d99cca69fd3a1ce165a7f086fd",
      "kibana.version": "8.4.0",
      "event.id": "550ea209-f20d-44dd-9e91-79a28c5f41a9",
      "event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.original_time": "2022-07-18T16:01:32.251Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    },
    {
      "kibana.alert.severity": "medium",
      "agent": {
        "id": "465cb546-3483-4d60-976a-6df687597fab",
        "type": "endpoint",
        "version": "7.12.15"
      },
      "kibana.alert.rule.references": [],
      "kibana.alert.rule.updated_by": "elastic2",
      "event.category": "behavior",
      "kibana.alert.rule.threat": [],
      "kibana.alert.rule.rule_name_override": "message",
      "kibana.alert.original_event.code": "behavior",
      "kibana.alert.rule.description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
      "source": {
        "port": 59406,
        "ip": "10.62.210.191"
      },
      "kibana.alert.rule.tags": [
        "Elastic",
        "Endpoint Security"
      ],
      "kibana.alert.rule.producer": "siem",
      "kibana.alert.rule.to": "now",
      "kibana.alert.rule.created_by": "elastic2",
      "kibana.alert.rule.timestamp_override": "event.ingested",
      "kibana.alert.original_event.ingested": "2022-07-18T15:05:03Z",
      "Endpoint": {
        "capabilities": [],
        "configuration": {
          "isolation": false
        },
        "state": {
          "isolation": false
        },
        "status": "enrolled",
        "policy": {
          "applied": {
            "name": "Default",
            "id": "00000000-0000-0000-0000-000000000000",
            "endpoint_policy_version": 1,
            "version": 3,
            "status": "warning"
          }
        }
      },
      "ecs": {
        "version": "1.6.0"
      },
      "kibana.alert.risk_score": 47,
      "host": {
        "hostname": "Host-v3mqhhvt7z",
        "os": {
          "Ext": {
            "variant": "Windows Server"
          },
          "name": "Windows",
          "family": "windows",
          "version": "10.0",
          "platform": "Windows",
          "full": "Windows Server 2016"
        },
        "ip": [
          "10.54.27.117"
        ],
        "name": "Host-v3mqhhvt7z",
        "id": "c97faec9-1f07-4052-9900-977946b22816",
        "mac": [
          "c9-e1-b9-3f-fc-5c"
        ],
        "architecture": "n467gryzu6"
      },
      "kibana.alert.rule.name": "Endpoint Security",
      "event.agent_id_status": "auth_metadata_missing",
      "event.kind": "signal",
      "kibana.alert.original_event.id": "041b6fdc-ed62-4836-9542-babe4ea89775",
      "kibana.alert.workflow_status": "open",
      "kibana.alert.rule.uuid": "1a6dbdc0-06aa-11ed-b2d1-8f870d1699ab",
      "kibana.alert.original_event.category": "behavior",
      "kibana.alert.rule.risk_score_mapping": [
        {
          "field": "event.risk_score",
          "value": "",
          "operator": "equals"
        }
      ],
      "kibana.alert.original_event.module": "endpoint",
      "kibana.alert.rule.interval": "5m",
      "kibana.alert.reason": "behavior event with process lsass.exe, file fake_behavior.exe,:59406,:443, on Host-v3mqhhvt7z created medium alert Endpoint Security.",
      "kibana.alert.rule.type": "query",
      "kibana.alert.rule.immutable": true,
      "event.code": "behavior",
      "kibana.alert.original_event.type": "info",
      "kibana.alert.depth": 1,
      "kibana.alert.rule.enabled": true,
      "kibana.alert.rule.version": 3,
      "kibana.alert.rule.from": "now-10m",
      "kibana.alert.rule.parameters": {
        "severity_mapping": [
          {
            "severity": "low",
            "field": "event.severity",
            "value": "21",
            "operator": "equals"
          },
          {
            "severity": "medium",
            "field": "event.severity",
            "value": "47",
            "operator": "equals"
          },
          {
            "severity": "high",
            "field": "event.severity",
            "value": "73",
            "operator": "equals"
          },
          {
            "severity": "critical",
            "field": "event.severity",
            "value": "99",
            "operator": "equals"
          }
        ],
        "references": [],
        "description": "Generates a detection alert each time an Elastic Endpoint Security alert is received. Enabling this rule allows you to immediately begin investigating your Endpoint alerts.",
        "language": "kuery",
        "type": "query",
        "rule_name_override": "message",
        "exceptions_list": [
          {
            "list_id": "endpoint_list",
            "namespace_type": "agnostic",
            "id": "endpoint_list",
            "type": "endpoint"
          }
        ],
        "timestamp_override": "event.ingested",
        "from": "now-10m",
        "severity": "medium",
        "max_signals": 10000,
        "risk_score": 47,
        "risk_score_mapping": [
          {
            "field": "event.risk_score",
            "value": "",
            "operator": "equals"
          }
        ],
        "author": [
          "Elastic"
        ],
        "query": "event.kind:alert and event.module:(endpoint and not endgame)\n",
        "index": [
          "logs-endpoint.alerts-*"
        ],
        "version": 3,
        "rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306",
        "license": "Elastic License v2",
        "required_fields": [],
        "immutable": true,
        "related_integrations": [],
        "setup": "",
        "false_positives": [],
        "threat": [],
        "to": "now"
      },
      "kibana.alert.status": "active",
      "destination": {
        "port": 443,
        "ip": "10.108.205.18"
      },
      "kibana.alert.ancestors": [
        {
          "depth": 0,
          "index": ".ds-logs-endpoint.alerts-default-2022.07.18-000001",
          "id": "HHXXEYIBRKQBoH3JXndW",
          "type": "event"
        }
      ],
      "rule": {
        "description": "Behavior rule description",
        "id": "5e73f4b2-2d31-4ad7-912f-545a6a719262"
      },
      "kibana.alert.original_event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.rule.exceptions_list": [
        {
          "list_id": "endpoint_list",
          "namespace_type": "agnostic",
          "id": "endpoint_list",
          "type": "endpoint"
        }
      ],
      "kibana.alert.rule.actions": [],
      "network": {
        "transport": "tcp",
        "type": "ipv4",
        "direction": "outgoing"
      },
      "event.sequence": 548,
      "kibana.alert.rule.rule_type_id": "siem.queryRule",
      "file": {
        "path": "C:/fake_behavior.exe",
        "name": "fake_behavior.exe"
      },
      "event.module": "endpoint",
      "kibana.alert.rule.license": "Elastic License v2",
      "kibana.alert.original_event.kind": "alert",
      "registry": {
        "path": "HKEY_USERS\\S-1-5-21-2460036010-3910878774-3458087990-1001\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\chrome",
        "data": {
          "strings": "C:/fake_behavior/lsass.exe"
        },
        "value": "lsass.exe"
      },
      "kibana.alert.rule.severity_mapping": [
        {
          "severity": "low",
          "field": "event.severity",
          "value": "21",
          "operator": "equals"
        },
        {
          "severity": "medium",
          "field": "event.severity",
          "value": "47",
          "operator": "equals"
        },
        {
          "severity": "high",
          "field": "event.severity",
          "value": "73",
          "operator": "equals"
        },
        {
          "severity": "critical",
          "field": "event.severity",
          "value": "99",
          "operator": "equals"
        }
      ],
      "process": {
        "Ext": {
          "ancestry": [
            "kvcs5wsatx",
            "3ckuzyk9ei"
          ],
          "code_signature": [
            {
              "trusted": false,
              "subject_name": "bad signer"
            }
          ],
          "user": "SYSTEM",
          "token": {
            "integrity_level_name": "high",
            "elevation_level": "full"
          }
        },
        "parent": {
          "pid": 1,
          "entity_id": "kvcs5wsatx"
        },
        "group_leader": {
          "name": "fake leader",
          "pid": 201,
          "entity_id": "ah4nfw1r7k"
        },
        "session_leader": {
          "name": "fake session",
          "pid": 637,
          "entity_id": "ah4nfw1r7k"
        },
        "code_signature": {
          "subject_name": "Microsoft Windows",
          "status": "trusted"
        },
        "entry_leader": {
          "name": "fake entry",
          "pid": 682,
          "entity_id": "ah4nfw1r7k"
        },
        "name": "lsass.exe",
        "pid": 2,
        "entity_id": "r4um0r7eo7",
        "executable": "C:/fake_behavior/lsass.exe"
      },
      "kibana.alert.rule.max_signals": 10000,
      "dll": [
        {
          "Ext": {
            "compile_time": 1534424710,
            "malware_classification": {
              "identifier": "Whitelisted",
              "score": 0,
              "threshold": 0,
              "version": "3.0.0"
            },
            "mapped_address": 5362483200,
            "mapped_size": 0
          },
          "path": "C:\\Program Files\\Cybereason ActiveProbe\\AmSvc.exe",
          "code_signature": {
            "trusted": true,
            "subject_name": "Cybereason Inc"
          },
          "pe": {
            "architecture": "x64"
          },
          "hash": {
            "sha1": "ca85243c0af6a6471bdaa560685c51eefd6dbc0d",
            "sha256": "8ad40c90a611d36eb8f9eb24fa04f7dbca713db383ff55a03aa0f382e92061a2",
            "md5": "1f2d082566b0fc5f2c238a5180db7451"
          }
        }
      ],
      "kibana.alert.rule.updated_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.rule.risk_score": 47,
      "kibana.alert.rule.author": [
        "Elastic"
      ],
      "kibana.alert.rule.false_positives": [],
      "kibana.alert.rule.consumer": "siem",
      "kibana.alert.rule.indices": [
        "logs-endpoint.alerts-*"
      ],
      "kibana.alert.rule.category": "Custom Query Rule",
      "kibana.alert.original_event.sequence": 548,
      "event.ingested": "2022-07-18T15:05:03Z",
      "event.action": "rule_detection",
      "@timestamp": "2022-07-18T15:08:48.065Z",
      "kibana.alert.rule.created_at": "2022-07-18T14:58:38.295Z",
      "kibana.alert.original_event.action": "rule_detection",
      "kibana.alert.rule.severity": "medium",
      "data_stream": {
        "namespace": "default",
        "type": "logs",
        "dataset": "endpoint.alerts"
      },
      "event.type": "info",
      "kibana.alert.original_event.agent_id_status": "auth_metadata_missing",
      "elastic": {
        "agent": {
          "id": "465cb546-3483-4d60-976a-6df687597fab"
        }
      },
      "kibana.alert.rule.execution.uuid": "455933fc-319b-444b-a6c1-b7df2532634b",
      "kibana.space_ids": [
        "default"
      ],
      "kibana.alert.uuid": "78a423405fbcf380ea734588533df7812c41c5f9dff5581d687474d430f13c72",
      "kibana.version": "8.4.0",
      "event.id": "041b6fdc-ed62-4836-9542-babe4ea89775",
      "event.dataset": "endpoint.diagnostic.collection",
      "kibana.alert.original_time": "2022-07-18T16:04:04.265Z",
      "kibana.alert.rule.rule_id": "9a1a2dae-0b5f-4c3d-8305-a268d404c306"
    }
  ],
  "count": 10
}
