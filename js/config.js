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

// 修复后的搜索配置代码（适用于 Cloudflare Pages）

// 1. 简化的聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 100,
    showSourceBadges: true
};

// 2. API站点配置 - 修复CORS问题，需要通过代理
const API_SITES = {
    heimuer: 'https://json.heimuer.xyz/api.php/provide/vod/',
    ffzy: 'http://cj.ffzyapi.com/api.php/provide/vod/',
    sllzy: 'https://api.sllzy.com/api.php/provide/vod/'
};

// 3. 请求头配置 - 简化以避免CORS问题
const REQUEST_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

// 4. 播放器配置
const PLAYER_CONFIG = {
    url: 'https://hoplayer.com/index.html',
    autoplay: true,
    width: '100%',
    height: '600'
};

// 5. 错误消息
const ERROR_MESSAGES = {
    NO_KEYWORD: '请输入搜索关键词',
    NO_RESULTS: '未找到相关视频',
    SEARCH_FAILED: '搜索失败，请检查网络或更换视频源',
    DETAIL_FAILED: '获取详情失败',
    UNSUPPORTED_SOURCE: '不支持的视频源',
    CORS_ERROR: 'CORS错误，请使用代理服务器'
};

// 6. 修复后的搜索处理函数 - 使用代理或直接调用（需要后端支持）
async function handleSearch(query, source = 'heimuer', customApi = null) {
    if (!query || !query.trim()) {
        return {
            code: 400,
            msg: ERROR_MESSAGES.NO_KEYWORD
        };
    }

    // 构建搜索参数
    const searchParams = new URLSearchParams({
        ac: 'detail',
        wd: query
    });

    let apiUrl;
    if (source === 'custom' && customApi) {
        // 自定义API需要确保格式正确
        apiUrl = customApi.endsWith('/') ? customApi : customApi + '/';
        apiUrl += '?' + searchParams.toString();
    } else {
        const baseUrl = API_SITES[source];
        if (!baseUrl) {
            return {
                code: 400,
                msg: ERROR_MESSAGES.UNSUPPORTED_SOURCE
            };
        }
        apiUrl = baseUrl + '?' + searchParams.toString();
    }

    try {
        // 使用简化的fetch请求，移除可能导致问题的选项
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), AGGREGATED_SEARCH_CONFIG.timeout);

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: REQUEST_HEADERS,
            signal: controller.signal,
            mode: 'cors'  // 明确指定CORS模式
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.list || !Array.isArray(data.list)) {
            return {
                code: 400,
                msg: ERROR_MESSAGES.NO_RESULTS
            };
        }

        // 处理结果
        return {
            code: 200,
            msg: '搜索成功',
            total: data.list.length,
            list: data.list.slice(0, AGGREGATED_SEARCH_CONFIG.maxResults).map(item => ({
                vod_id: item.vod_id,
                vod_name: item.vod_name || '未知标题',
                type_name: item.type_name || '未知类型',
                vod_remarks: item.vod_remarks || '暂无备注',
                vod_pic: item.vod_pic || '',
                source: source
            }))
        };

    } catch (error) {
        // 详细的错误处理
        if (error.name === 'AbortError') {
            return {
                code: 408,
                msg: '请求超时'
            };
        }
        
        if (error.message.includes('CORS')) {
            return {
                code: 500,
                msg: ERROR_MESSAGES.CORS_ERROR
            };
        }

        return {
            code: 500,
            msg: ERROR_MESSAGES.SEARCH_FAILED + ': ' + error.message
        };
    }
}

// 7. 修复后的详情处理函数
async function handleDetail(id, source = 'heimuer', customApi = null) {
    if (!id) {
        return {
            code: 400,
            msg: '缺少视频ID'
        };
    }

    // 构建详情参数
    const detailParams = new URLSearchParams({
        ac: 'detail',
        ids: id
    });

    let apiUrl;
    if (source === 'custom' && customApi) {
        apiUrl = customApi.endsWith('/') ? customApi : customApi + '/';
        apiUrl += '?' + detailParams.toString();
    } else {
        const baseUrl = API_SITES[source];
        if (!baseUrl) {
            return {
                code: 400,
                msg: ERROR_MESSAGES.UNSUPPORTED_SOURCE
            };
        }
        apiUrl = baseUrl + '?' + detailParams.toString();
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), AGGREGATED_SEARCH_CONFIG.timeout);

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: REQUEST_HEADERS,
            signal: controller.signal,
            mode: 'cors'
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
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
        
        // 解析播放链接
        const episodes = [];
        if (playUrl) {
            try {
                const urlParts = playUrl.split('$$$');
                urlParts.forEach(part => {
                    const links = part.split('#');
                    links.forEach(link => {
                        if (link && link.includes('$')) {
                            const [name, url] = link.split('$');
                            if (url && url.trim()) {
                                episodes.push({ 
                                    name: name || '播放', 
                                    url: url.trim() 
                                });
                            }
                        }
                    });
                });
            } catch (parseError) {
                console.warn('播放链接解析错误:', parseError);
            }
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
        if (error.name === 'AbortError') {
            return {
                code: 408,
                msg: '请求超时'
            };
        }

        return {
            code: 500,
            msg: ERROR_MESSAGES.DETAIL_FAILED + ': ' + error.message
        };
    }
}

// 8. 聚合搜索函数 - 添加错误恢复机制
async function aggregatedSearch(query, sources = ['heimuer', 'ffzy', 'sllzy']) {
    if (!AGGREGATED_SEARCH_CONFIG.enabled) {
        return await handleSearch(query, sources[0]);
    }

    const allResults = [];
    const errors = [];

    // 顺序执行以避免同时发起过多请求
    for (const source of sources) {
        try {
            const result = await handleSearch(query, source);
            if (result.code === 200 && result.list && result.list.length > 0) {
                const sourceResults = result.list.map(item => ({
                    ...item,
                    source: source
                }));
                allResults.push(...sourceResults);
            }
        } catch (error) {
            errors.push(`${source}: ${error.message}`);
        }
    }

    if (allResults.length === 0) {
        return {
            code: 400,
            msg: ERROR_MESSAGES.NO_RESULTS + (errors.length > 0 ? ' (' + errors.join(', ') + ')' : '')
        };
    }

    // 去重
    const uniqueResults = allResults.filter((item, index, self) => 
        index === self.findIndex(t => t.vod_name === item.vod_name)
    );

    return {
        code: 200,
        msg: `找到 ${uniqueResults.length} 个结果`,
        total: uniqueResults.length,
        list: uniqueResults.slice(0, AGGREGATED_SEARCH_CONFIG.maxResults)
    };
}

// 9. 自定义源配置
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

// 12. 测试API连接性的函数
async function testApiConnection(apiUrl) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), CUSTOM_API_CONFIG.testTimeout);
        
        const response = await fetch(apiUrl + '?ac=detail&wd=test', {
            method: 'GET',
            headers: REQUEST_HEADERS,
            signal: controller.signal,
            mode: 'cors'
        });
        
        clearTimeout(timeoutId);
        return response.ok;
    } catch (error) {
        return false;
    }
}
