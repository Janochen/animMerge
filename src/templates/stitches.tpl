<div class="stitches">
    <!-- .stitches-toolbar -->
    <div class="stitches-toolbar btn-toolbar">
        <div class="btn-group">
            <a href="http://draeton.github.io/stitches/" class="btn btn-small btn-link">
                <strong>Stitches</strong>
            </a>
            <button data-action="open" class="btn btn-small btn-info files" title="Open">
                <i class="icon-folder-open icon-white"></i> <span class="hidden-phone">打开</span><input class="file" type="file" multiple="multiple">
            </button>
            <button data-action="settings" class="btn btn-small btn-info" title="Set layout, style prefix, padding, etc.">
                <i class="icon-cog icon-white"></i> <span class="hidden-phone">设置</span>
            </button>
            <button data-action="clear" class="btn btn-small btn-info disabled" title="Clear sprites from the canvas">
                <i class="icon-remove icon-white"></i> <span class="hidden-phone">清空</span>
            </button>
        </div>
        <div class="btn-group">
            <button data-action="downloads" class="btn btn-small btn-success disabled" title="Get the generated sprite sheet and stylesheet">
                <i class="icon-download-alt icon-white"></i> <span class="hidden-phone">下载</span>
            </button>
        </div>
        <div class="btn-group">
            <button data-action="about" class="btn btn-small btn-info" title="About Stitches">
                <i class="icon-info-sign icon-white"></i> <span class="hidden-phone">关于</span>
            </button>
        </div>
    </div>
    <!-- /.stitches-toolbar -->

    <!-- .stitches-progress -->
    <div class="stitches-progress collapse">
        <div class="progress progress-warning">
            <div class="bar" style="width: 0%;"></div>
        </div>
    </div>
    <!-- /.stitches-progress -->

    <!-- .stitches-drop-box -->
    <div class="stitches-drop-box">
        <div class="stitches-overlay"></div>

        <div class="stitches-wrap">

            <!-- .stitches-canvas -->
            <div class="stitches-canvas"  id="stitches-canvas"></div>
            <!-- /.stitches-canvas -->

        </div>

        <!-- .stitches-palettes -->
        <div class="stitches-palettes">
            <!-- .stitches-settings -->
            <div class="stitches-palette stitches-settings fade">
                <div class="stitches-palette-header">
                    <button type="button" class="close" data-action="close" title="Close">&times;</button>
                    <h4>设置</h4>
                </div>

                <div class="stitches-palette-body">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#general" data-toggle="tab">通用</a></li>
                        <li><a href="#import" data-toggle="tab">导入</a></li>
                    </ul>
                    <form class="form-horizontal">
                        <div class="tab-content">
                            <div class="tab-pane active" id="general">
                                <div class="control-group hide">
                                    <label class="control-label">位置Position</label>
                                    <div class="controls">
                                        <label class="checkbox">
                                            <input name="position" type="checkbox" value="auto"/> 自动Auto
                                        </label>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">布局Layout</label>
                                    <div class="controls">
                                        <label class="radio inline">
                                            <input name="layout" type="radio" value="compact"/> 最优 Compact
                                        </label>
                                        <label class="radio inline">
                                            <input name="layout" type="radio" value="vertical"/> 纵向 Vertical
                                        </label>
                                        <label class="radio inline">
                                            <input name="layout" type="radio" value="horizontal"/> 横向 Horizontal
                                        </label>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">样式语言CSS/LESS</label>
                                    <div class="controls">
                                        <label class="radio inline">
                                            <input name="stylesheet" type="radio" value="css"/> CSS
                                        </label>
                                        <label class="radio inline">
                                            <input name="stylesheet" type="radio" value="less"/> LESS
                                        </label>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">前缀 Style prefix</label>
                                    <div class="controls">
                                        <input name="prefix" type="text" placeholder="Style class prefix&hellip;">
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">间距 Padding</label>
                                    <div class="controls">
                                        <div class="input-append">
                                            <input name="padding" type="number" min="0" required placeholder="Sprite padding&hellip;">
                                            <span class="add-on">px</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label">Data URI</label>
                                    <div class="controls">
                                        <label class="checkbox">
                                            <input name="uri" type="checkbox" value="true"/> Include encoded image in CSS
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="import">
                                <div class="control-group">
                                    <label class="control-label">Paste import here</label>
                                    <div class="controls">
                                        <textarea name="import" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="stitches-palette-footer">
                    <div class="btn-toolbar">
                        <div class="btn-group">
                            <a href="#" class="downloads-export btn btn-small btn-success" download="stitches"><i class="icon-download-alt icon-white"></i> 导出</a>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-small btn-info" data-action="close" title="Save"><span>保存</span></button>
                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>关闭</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.stitches-settings -->

            <!-- .stitches-properties -->
            <div class="stitches-palette stitches-properties fade">
                <div class="stitches-palette-header">
                    <button type="button" class="close" data-action="close" title="Close">&times;</button>
                    <h4>雪碧图属性Sprite Properties</h4>
                </div>

                <div class="stitches-palette-body">
                    <form class="form-horizontal">
                        <div class="control-group">
                            <label class="control-label">名称 Name</label>
                            <div class="controls">
                                <input name="name" type="text" required placeholder="Sprite name&hellip;">
                            </div>
                        </div>

                        <div class="control-group">
                            <label class="control-label">Coordinates (x, y)</label>
                            <div class="controls">
                                <div class="input-append">
                                    <input name="x" required disabled placeholder="From left&hellip;" class="input-mini">
                                    <span class="add-on">px</span>
                                </div>
                                <div class="input-append">
                                    <input name="y" required disabled placeholder="From top&hellip;" class="input-mini">
                                    <span class="add-on">px</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="stitches-palette-footer">
                    <div class="btn-toolbar">
                        <div class="btn-group">
                            <button class="btn btn-small btn-danger" data-action="remove" title="Delete"><span>删除</span></button>
                            <button class="btn btn-small btn-info" data-action="close" title="Save"><span>保存</span></button>
                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>关闭</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.stitches-properties -->

            <!-- .stitches-about -->
            <div class="stitches-palette stitches-about fade in">
                <div class="stitches-palette-header">
                    <button type="button" class="close" data-action="close" title="Close">&times;</button>
                    <h4>About Stitches</h4>
                </div>

                <div class="stitches-palette-body">
                    <p><a href="http://draeton.github.io/stitches/">Stitches<a/> is an HTML5 <a href="http://en.wikipedia.org/wiki/Sprite_(computer_graphics)#Sprites_by_CSS">sprite sheet</a> generator.</p>

                    <p>Drag &amp; drop image files onto the space below, or use the &ldquo;Open&rdquo; link to load images using the file browser. Then, click &ldquo;Generate&rdquo; to create a sprite sheet and stylesheet. <em>This demo uses a couple of HTML5 APIs, and it is only currently compatible with WebKit and Firefox browsers.</em></p>

                    <p>Stitches is developed by <a href="http://draeton.github.io">Matthew Cobbs</a> in concert with the lovely open-source community at <a href="http://github.io">Github</a>. Thanks are owed to the developers at Twitter for <a href="http://twitter.github.io/bootstrap">Bootstrap</a>, and <a href="http://glyphicons.com/">Glyphicons</a> for some cool little icons.</p>

                    <p class="text-right"><small>Copyright &copy; 2013 Matthew Cobbs<br/>
                        Licensed under the MIT license.</small></p>
                </div>

                <div class="stitches-palette-footer">
                    <div class="btn-toolbar">
                        <div class="btn-group">
                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>关闭</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.stitches-about -->

            <!-- .stitches-downloads -->
            <div class="stitches-palette stitches-downloads fade">
                <div class="stitches-palette-header">
                    <button type="button" class="close" data-action="close" title="Close">&times;</button>
                    <h4>下载</h4>
                </div>

                <div class="stitches-palette-body">
                    <section></section>
                </div>

                <div class="stitches-palette-footer">
                    <div class="btn-toolbar">
                        <div class="btn-group">
                            <a href="#" class="downloads-spritesheet btn btn-small btn-success" download="spritesheet"><i class="icon-download-alt icon-white"></i> 下载雪碧图</a>
                            <a href="#" class="downloads-stylesheet btn btn-small btn-success" download="stylesheet"><i class="icon-download-alt icon-white"></i> 下载样式</a>
                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>关闭</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.stitches-downloads -->
        </div>
        <!-- /.stitches-palettes -->
    </div>
    <!-- /.stitches-drop-box -->
</div>