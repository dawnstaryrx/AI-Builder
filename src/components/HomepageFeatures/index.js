import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🚀 Learn AI from Zero',
    description: '从 0 开始学习 AI、Prompt、Agent 与应用开发',
  },
  {
    title: '✍️ Prompt Engineering',
    description: '掌握高质量 Prompt，让 AI 按你的方式工作',
  },
  {
    title: '🧠 Build AI Apps',
    description: '从 Prompt 到项目，构建属于你的 AI 应用',
  },
];

function Feature({ title, description }) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <h1>AI Builder</h1>
      <p>Learn AI · Build AI · Master Prompt</p>

      <div className={styles.buttons}>
        <a className="button button--primary" href="/getting-started">
          🚀 Get Started
        </a>
        <a className="button button--secondary" href="/prompt">
          ✍️ Learn Prompt
        </a>
      </div>
    </header>
  );
}

function LearningPath() {
  const paths = [
    { title: 'Getting Started', icon: '🚀' },
    { title: 'Prompt', icon: '✍️' },
    { title: 'Skills', icon: '🧠' },
    { title: 'Projects', icon: '🛠️' },
  ];

  return (
    <div className={styles.pathWrapper}>
      <h2>📚 Learning Path</h2>

      <div className={styles.pathGrid}>
        {paths.map((item, i) => (
          <div key={i} className={styles.pathCard}>
            <div className={styles.icon}>{item.icon}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopularPrompts() {
  const prompts = [
    {
      title: '小红书爆款文案',
      desc: '自动生成高转化种草文案',
      tag: 'Marketing',
    },
    {
      title: 'AI写代码助手',
      desc: '生成函数 / 修复 Bug / 解释代码',
      tag: 'Coding',
    },
    {
      title: '简历优化助手',
      desc: '优化表达，提高面试通过率',
      tag: 'Career',
    },
  ];

  return (
    <section className={styles.promptSection}>
      <div className="container">
        <div className={styles.promptHeader}>
          <h2>🔥 Popular Prompts</h2>
          <p>精选高频 AI Prompt，直接使用</p>
        </div>

        <div className={styles.promptGrid}>
          {prompts.map((item, i) => (
            <div key={i} className={styles.promptCard}>
              <div className={styles.promptTag}>{item.tag}</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className={styles.promptAction}>
                <span>Use Prompt →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <Hero />
      <section className={styles.sectionLight}>
        <LearningPath />
      </section>

      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.featureHeader}>
            <h2>🚀 What You’ll Learn</h2>
            <p>从基础到实战，完整掌握 AI 开发能力</p>
          </div>

          <div className={styles.featureGrid}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <PopularPrompts />
    </>
  );
}
