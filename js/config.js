// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    // xiaomaomi: {
    //     api: 'https://zy.xiaomaomi.cc/api.php/provide/vod',
    //     name: '小猫咪资源',
    // },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.com/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    
     ckzy: {
         api: 'https://www.ckzy1.com',
         name: 'CK资源',
         adult: true
     },
     jkun: {
         api: 'https://jkunzyapi.com',
         name: 'jkun资源',
         adult: true
     },
     bwzy: {
         api: 'https://api.bwzym3u8.com',
         name: '百万资源',
         adult: true
     },
     souav: {
         api: 'https://api.souavzy.vip',
         name: 'souav资源',
         adult: true
     },
     r155: {
         api: 'https://155api.com',
         name: '155资源',
         adult: true
     },
     lsb: {
         api: 'https://apilsbzy1.com',
         name: 'lsb资源',
         adult: true
     },
     huangcang: {
         api: 'https://hsckzy.vip',
         name: '黄色仓库',
         adult: true,
         detail: 'https://hsckzy.vip'
     },
     yutu: {
         api: 'https://yutuzy10.com',
         name: '玉兔资源',
         adult: true
     },

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 参考 Cloudflare Worker 的简化搜索配置

// 1. 简化的聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 100,
    showSourceBadges: true
};

// 3. 统一的请求头配置
const REQUEST_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.baidu.com/',
    'Accept': 'application/json'
};

// 4. 简化的播放器配置
const PLAYER_CONFIG = {
    url: 'https://hoplayer.com/index.html',  // 使用外部播放器URL
    autoplay: true,
    width: '100%',
    height: '600'
};

// 5. 简化的错误消息
const ERROR_MESSAGES = {
    NO_KEYWORD: '请输入搜索关键词',
    NO_RESULTS: '未找到相关视频',
    SEARCH_FAILED: '搜索失败，请检查网络或更换视频源',
    DETAIL_FAILED: '获取详情失败',
    UNSUPPORTED_SOURCE: '不支持的视频源'
};

// 6. 简化的搜索处理函数（参考Worker逻辑）
async function handleSearch(query, source = 'heimuer', customApi = null) {
    if (!query || !query.trim()) {
        return {
            code: 400,
            msg: ERROR_MESSAGES.NO_KEYWORD
        };
    }

    // 确定API URL
    let apiUrl;
    if (source === 'custom' && customApi) {
        apiUrl = customApi + (customApi.includes('?') ? '&' : '?') + 'ac=detail&wd=';
    } else {
        apiUrl = API_SITES[source];
    }

    if (!apiUrl) {
        return {
            code: 400,
            msg: ERROR_MESSAGES.UNSUPPORTED_SOURCE
        };
    }

    try {
        // 发起搜索请求
        const response = await fetch(apiUrl + encodeURIComponent(query), {
            headers: REQUEST_HEADERS,
            signal: AbortSignal.timeout(AGGREGATED_SEARCH_CONFIG.timeout)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.list || !Array.isArray(data.list)) {
            return {
                code: 400,
                msg: ERROR_MESSAGES.NO_RESULTS
            };
        }

        // 简化结果处理
        return {
            code: 200,
            msg: '搜索成功',
            total: data.list.length,
            list: data.list.slice(0, AGGREGATED_SEARCH_CONFIG.maxResults).map(item => ({
                vod_id: item.vod_id,
                vod_name: item.vod_name,
                type_name: item.type_name || '未知类型',
                vod_remarks: item.vod_remarks || '暂无备注',
                vod_pic: item.vod_pic || '',
                source: source  // 添加来源标识
            }))
        };

    } catch (error) {
        return {
            code: 500,
            msg: ERROR_MESSAGES.SEARCH_FAILED
        };
    }
}

// 7. 简化的详情处理函数
async function handleDetail(id, source = 'heimuer', customApi = null) {
    if (!id) {
        return {
            code: 400,
            msg: '缺少视频ID'
        };
    }

    // 确定详情API URL
    let apiUrl;
    if (source === 'custom' && customApi) {
        apiUrl = customApi + (customApi.includes('?') ? '&' : '?') + 'ac=detail&ids=';
    } else {
        apiUrl = API_SITES.detail[source];
    }

    if (!apiUrl) {
        return {
            code: 400,
            msg: ERROR_MESSAGES.UNSUPPORTED_SOURCE
        };
    }

    try {
        const response = await fetch(apiUrl + id, {
            headers: REQUEST_HEADERS,
            signal: AbortSignal.timeout(AGGREGATED_SEARCH_CONFIG.timeout)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.list || !data.list[0]) {
            return {
                code: 400,
                msg: ERROR_MESSAGES.NO_RESULTS
            };
        }

        const video = data.list[0];
        const playUrl = video.vod_play_url || '';
        
        // 简化播放链接解析（参考Worker逻辑）
        const episodes = [];
        if (playUrl) {
            const urlParts = playUrl.split('$$$');
            urlParts.forEach(part => {
                const links = part.split('#');
                links.forEach(link => {
                    if (link && link.includes('$')) {
                        const [name, url] = link.split('$');
                        if (url) episodes.push({ name: name || '播放', url: url });
                    }
                });
            });
        }

        return {
            code: 200,
            msg: '获取成功',
            data: {
                vod_id: video.vod_id,
                vod_name: video.vod_name,
                episodes: episodes
            }
        };

    } catch (error) {
        return {
            code: 500,
            msg: ERROR_MESSAGES.DETAIL_FAILED
        };
    }
}

// 8. 聚合搜索函数（简化版）
async function aggregatedSearch(query, sources = ['heimuer', 'ffzy', 'sllzy']) {
    if (!AGGREGATED_SEARCH_CONFIG.enabled) {
        // 如果未启用聚合搜索，使用默认源
        return await handleSearch(query, sources[0]);
    }

    const searchPromises = sources.map(source => 
        handleSearch(query, source).catch(error => ({
            code: 500,
            msg: `${source}: ${error.message}`,
            list: []
        }))
    );

    try {
        const results = await Promise.allSettled(searchPromises);
        const allResults = [];
        
        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value.code === 200) {
                const sourceResults = result.value.list.map(item => ({
                    ...item,
                    source: sources[index]
                }));
                allResults.push(...sourceResults);
            }
        });

        if (allResults.length === 0) {
            return {
                code: 400,
                msg: ERROR_MESSAGES.NO_RESULTS
            };
        }

        // 简单去重（基于视频名称）
        const uniqueResults = allResults.filter((item, index, self) => 
            index === self.findIndex(t => t.vod_name === item.vod_name)
        );

        return {
            code: 200,
            msg: `找到 ${uniqueResults.length} 个结果`,
            total: uniqueResults.length,
            list: uniqueResults.slice(0, AGGREGATED_SEARCH_CONFIG.maxResults)
        };

    } catch (error) {
        return {
            code: 500,
            msg: ERROR_MESSAGES.SEARCH_FAILED
        };
    }
}

// 9. 自定义源配置（简化）
const CUSTOM_API_CONFIG = {
    maxSources: 5,
    testTimeout: 5000,
    separator: ','
};

// 10. 解析自定义API源
function parseCustomAPIs(customApiString) {
    if (!customApiString || !customApiString.trim()) {
        return [];
    }
    
    return customApiString
        .split(CUSTOM_API_CONFIG.separator)
        .map(url => url.trim())
        .filter(url => url && isValidUrl(url))
        .slice(0, CUSTOM_API_CONFIG.maxSources);
}

// 11. URL验证函数
function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}
