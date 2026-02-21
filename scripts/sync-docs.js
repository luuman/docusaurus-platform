const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const PROJECTS = {
  electron: {
    repo: 'https://github.com/your-org/electron-docs.git',
    branch: 'main',
    docsPath: 'docs',
  },
  tauri: {
    repo: 'https://github.com/your-org/tauri-docs.git',
    branch: 'main',
    docsPath: 'docs',
  },
  rust: {
    repo: 'https://github.com/your-org/rust-docs.git',
    branch: 'main',
    docsPath: 'docs',
  }
};

async function syncProject(name, config) {
  console.log(`🔄 同步 ${name} 文档...`);
  
  const projectDir = path.join(__dirname, '../projects', `${name}-repo`);
  const targetDir = path.join(__dirname, '../docs', name);
  
  // 确保目录存在
  await fs.ensureDir(projectDir);
  await fs.ensureDir(targetDir);
  
  try {
    // 克隆或更新仓库
    if (!fs.existsSync(path.join(projectDir, '.git'))) {
      console.log(`📦 首次克隆 ${name} 仓库...`);
      execSync(`git clone ${config.repo} ${projectDir}`, { stdio: 'inherit' });
    } else {
      console.log(`🔄 更新 ${name} 仓库...`);
      execSync(`cd ${projectDir} && git pull`, { stdio: 'inherit' });
    }
    
    // 切换到指定分支
    if (config.branch) {
      execSync(`cd ${projectDir} && git checkout ${config.branch}`, { stdio: 'inherit' });
    }
    
    // 清空目标目录
    await fs.emptyDir(targetDir);
    
    // 复制文档内容
    const sourceDocs = path.join(projectDir, config.docsPath);
    if (await fs.pathExists(sourceDocs)) {
      await fs.copy(sourceDocs, targetDir);
      console.log(`✅ ${name} 文档同步完成 (${targetDir})`);
    } else {
      console.log(`⚠️ ${name} 文档目录不存在: ${sourceDocs}`);
    }
    
    // 复制侧边栏配置（如果有）
    const sidebarSource = path.join(projectDir, 'sidebars.js');
    const sidebarTarget = path.join(__dirname, `../sidebars.${name}.js`);
    if (await fs.pathExists(sidebarSource)) {
      await fs.copy(sidebarSource, sidebarTarget);
      console.log(`✅ ${name} 侧边栏配置已同步`);
    }
    
  } catch (error) {
    console.error(`❌ ${name} 同步失败:`, error.message);
  }
}

async function main() {
  const project = process.argv[2];
  
  if (project) {
    if (PROJECTS[project]) {
      await syncProject(project, PROJECTS[project]);
    } else {
      console.error(`未知项目: ${project}`);
    }
  } else {
    for (const [name, config] of Object.entries(PROJECTS)) {
      await syncProject(name, config);
    }
  }
  
  console.log('✨ 所有文档同步完成！');
}

main().catch(console.error);
